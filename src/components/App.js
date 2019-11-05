import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import List from './List';
import Detail from './Detail';
import Footer from './Footer';

export default function App() {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/list/:name" component={List} />
          <Route path="/detail" component={Detail} />
        </Switch>
        <Footer />
      </>
    </Router>
  );
}
