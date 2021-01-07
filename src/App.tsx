import React from 'react';

import Header from './components/Header';
import Index from './pages/Index';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Index />
      <GlobalStyle />
    </>
  );
};

export default App;
