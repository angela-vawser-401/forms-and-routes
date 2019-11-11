import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from '../containers/Home';
import List from '../containers/List';
import CharacterDetail from './Detail';

export default function App() {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route path="/list/:search" component={List} />
          <Route exact path="/list" component={List} />
          <Route path="/character/:name" component={CharacterDetail} />
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </>
    </Router>
  );
}
