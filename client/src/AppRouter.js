import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import Movies from './pages/Movies';

const AppRouter = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/movies/:id' component={MovieDetails} />
      <Route path='/movies' component={Movies} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
