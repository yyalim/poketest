import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import PokemonDetailPage from '../PokemonDetailPage';
import PokemonListPage from '../PokemonListPage';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/pokemon/:name" component={PokemonDetailPage} />
        <Route exact path="/pokemon" component={PokemonListPage} />
        <Redirect to="/pokemon" />
      </Switch>
    </Router>
  );
}
