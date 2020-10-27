import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import CharacterDetailPage from '../../pages/CharacterDetailPage';
import CharacterPage from '../../pages/CharacterPage';
import Header from '../header/Header';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={CharacterPage} />
        <Route exact path="/detail/:id" component={CharacterDetailPage} />
      </Switch>
    </Router>
  );
}
