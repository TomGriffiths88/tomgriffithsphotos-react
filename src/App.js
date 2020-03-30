import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import LandingPage from './containers/LandingPage/LandingPage';
import PortfolioPage from './containers/PortfolioPage/PortfolioPage';
import CopyrightNotice from './components/CopyrightNotice/CopyrightNotice';
import Page from './containers/Page/Page';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Switch>
          <Route path='/portfolio/:slug' component={PortfolioPage} />
          <Route path='/info' component={Page} />
          <Route path='/contact' component={Page} />
          <Route path='/' exact component={LandingPage} />
        </Switch>
        <CopyrightNotice />
      </div>
    </BrowserRouter>
  );
}

export default App;
