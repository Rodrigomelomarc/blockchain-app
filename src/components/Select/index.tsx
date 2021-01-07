import React from 'react';
import ReactSelect, { Props } from 'react-select';
import styles from './customStyles';

const customSingleValue: any = ({ data }: any) => (
  <div className="input-select">
    <div className="input-select__single-value">
      {data.icon && <span className="input-select__icon">{data.icon}</span>}
      <span>{data.label}</span>
    </div>
  </div>
);

const Select: React.FC<Props> = ({ options, name, ...rest }) => {
  return (
    <ReactSelect
      name={name}
      options={options}
      styles={styles}
      isSearchable={false}
      components={{ SingleValue: customSingleValue }}
      {...rest}
    />
  );
};

export default Select;
