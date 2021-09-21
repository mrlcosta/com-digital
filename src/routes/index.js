import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home/Home';

export default function Routes() {
  return (
    <Switch>
      {/* 
      <Route path="/loading/:cpf" component={Loading} /> */}
      <Route path="/" component={Home} />
    </Switch>
  );
}
