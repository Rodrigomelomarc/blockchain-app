import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import btcIcon from '@iconify-icons/cryptocurrency/btc';
import etcIcon from '@iconify-icons/cryptocurrency/etc';
import { subDays, getUnixTime, startOfDay } from 'date-fns';

import { Container, Card } from './styles';
import Select from '../../components/Select';
import PriceChart from '../../components/PriceChart';

const iconStyle = {
  marginRight: 12,
};

const options = [
  {
    value: 'btc',
    label: 'Bitcoin',
    icon: <Icon color="#F9AA4B" style={iconStyle} icon={btcIcon} />,
  },
  {
    value: 'eth',
    label: 'Ethereal',
    icon: <Icon color="#968bdf" style={iconStyle} icon={etcIcon} />,
  },
];

const Index: React.FC = () => {
  const [priceData, setPriceData] = useState([]);
  const [coin, setCoin] = useState<string>('btc');

  useEffect(() => {
    const actualDate = new Date();
    const initialDate = getUnixTime(startOfDay(subDays(actualDate, 1)));

    fetch(
      `https://api.blockchain.info/price/index-series?base=${coin.toUpperCase()}&quote=USD&start=${initialDate.toString()}&scale=900&cors=true`,
    )
      .then((data) => data.json())
      .then((priceData) => setPriceData(priceData));
  }, [coin]);

  function handleSelectChange(e: any): void {
    setCoin(e.value);
  }

  return (
    <Container>
      <div>
        <Select
          name="moeda"
          options={options}
          defaultValue={options[0]}
          onChange={handleSelectChange}
        />
      </div>

      <Card gridArea="price">
        <h1>Preço:</h1>
        <PriceChart data={priceData} />
      </Card>

      <Card gridArea="blocks">
        <h1>Blocos:</h1>
      </Card>

      <Card gridArea="transactions">
        <h1>Transações:</h1>
      </Card>
    </Container>
  );
};

export default Index;
