import React, { useRef, useEffect, useMemo } from 'react';
import Chart from 'chart.js';
import { fromUnixTime, format } from 'date-fns';

interface PriceVariability {
  timestamp: number;
  price: number;
}

interface PriceChartProps {
  data?: PriceVariability[];
}

const PriceChart: React.FC<PriceChartProps> = ({ data }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);

  const labels = useMemo<string[] | undefined>(() => {
    return data?.reduce((numberArr: string[], d, index) => {
      numberArr[index] = format(fromUnixTime(d.timestamp), 'ccc H:mm');

      return numberArr;
    }, []);
  }, [data]);

  const prices = useMemo<number[] | undefined>(() => {
    return data?.reduce((priceArr: number[], d, index) => {
      priceArr[index] = d.price;

      return priceArr;
    }, []);
  }, [data]);

  useEffect(() => {
    const ctx = chartRef.current?.getContext('2d');

    if (ctx) {
      new Chart(ctx, {
        type: 'line',
        data: {
          labels,
          datasets: [
            {
              data: prices,
              label: 'Preço em USD (24hrs)',
              borderColor: '#968bdf',
              fill: false,
            },
          ],
        },
      });
    }
  }, [labels, prices]);

  return <canvas id="priceChart" ref={chartRef} height="250" width="1261" />;
};

export default PriceChart;
