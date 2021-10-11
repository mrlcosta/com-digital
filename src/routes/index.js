import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Lab1 from '../pages/Lab1/Lab1.js';
import Lab2 from '../pages/Lab2/Lab2.js';
export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/#/lab1" exact component={Lab1} />
      <Route path="/#/Lab1" exact component={Lab1} />
      <Route path="/lab1" exact component={Lab1} />
      <Route path="/Lab1" exact component={Lab1} />

      <Route path="/#/lab2" exact component={Lab2} />
      <Route path="/#/Lab2" exact component={Lab2} />
      <Route path="/lab2" exact component={Lab2} />
      <Route path="/Lab2" exact component={Lab2} />
    </Switch>
  );
}
