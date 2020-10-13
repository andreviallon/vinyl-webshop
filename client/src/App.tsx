import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import PageWrapper from './components/PageWrapper';
import HomePage from './pages/HomePage';
import AlbumPage from './pages/AlbumPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <PageWrapper>
          <Route path='/' component={HomePage} exact />
          <Route path='/album/:id' component={AlbumPage} />
        </PageWrapper>
      </div>
    </Router>
  );
}

export default App;
