import { StylesConfig } from 'react-select';

const customStyles: StylesConfig = {
  container: () => ({
    minWidth: 230,
    maxWidth: 295,
    maxHeight: 34,
  }),
  control: () => ({
    border: 'none',
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    color: '#463535',
    fontWeight: 500,
    fontSize: 32,
    outline: 'none',
    background: 'transparent',
  }),
  valueContainer: (provided) => ({
    ...provided,
    color: '#463535',
    padding: 0,
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#463535',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: 300,
  }),
  dropdownIndicator: () => ({
    width: 32,
    height: 32,
    color: '#463535',
  }),
  menu: () => ({
    background: 'transparent',
    border: 'none',
  }),
};

export default customStyles;
