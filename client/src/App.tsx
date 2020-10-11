import React from 'react';
import Header from './components/Header';
import PageWrapper from './components/PageWrapper';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Header />
      <PageWrapper>
        <HomePage />
      </PageWrapper>
    </div>
  );
}

export default App;
