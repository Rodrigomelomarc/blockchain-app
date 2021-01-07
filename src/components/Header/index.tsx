import React from 'react';

import { Container } from './styles';
import logo from '../../assets/logo.svg';

const Header: React.FC = () => {
  return (
    <Container>
      <div>
        <img src={logo} alt="Blockchain Logo" />
        <span>Crypto tracker</span>
      </div>
    </Container>
  );
};

export default Header;
