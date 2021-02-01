import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import PageWrapper from './components/PageWrapper';
import HomePage from './pages/HomePage';
import AlbumPage from './pages/AlbumPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <Router>
      <Header />
      <PageWrapper>
        <Route path='/' component={HomePage} exact />
        <Route path='/login' component={LoginPage} exact />
        <Route path='/register' component={RegisterPage} exact />
        <Route path='/album/:id' component={AlbumPage} />
        <Route path='/cart/:id?' component={CartPage} />
        <Route path='/profile' component={ProfilePage} />
      </PageWrapper>
    </Router>
  );
}

export default App;
