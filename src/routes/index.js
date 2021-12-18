import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Lab1 from '../pages/Lab1/Lab1.js';
import Lab2 from '../pages/Lab2/Lab2.js';
import Lab3 from '../pages/Lab3/Lab3.js';
import Lab4 from '../pages/Lab4/Lab4.js';
import Lab5 from '../pages/Lab5/Lab5.js';
import Lab6 from '../pages/Lab6/Lab6.js';
import Lab7 from '../pages/Lab7/Lab7.js';
import Lab8 from '../pages/Lab8/Lab8.js';
import Lab9 from '../pages/Lab9/Lab9.js';

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

      <Route path="/#/lab3" exact component={Lab3} />
      <Route path="/#/Lab3" exact component={Lab3} />
      <Route path="/lab3" exact component={Lab3} />
      <Route path="/Lab3" exact component={Lab3} />

      <Route path="/#/lab4" exact component={Lab4} />
      <Route path="/#/Lab4" exact component={Lab4} />
      <Route path="/lab4" exact component={Lab4} />
      <Route path="/Lab4" exact component={Lab4} />

      <Route path="/#/lab5" exact component={Lab5} />
      <Route path="/#/lab5" exact component={Lab5} />
      <Route path="/lab5" exact component={Lab5} />
      <Route path="/lab5" exact component={Lab5} />

      <Route path="/#/lab6" exact component={Lab6} />
      <Route path="/#/lab6" exact component={Lab6} />
      <Route path="/lab6" exact component={Lab6} />
      <Route path="/lab6" exact component={Lab6} />

      <Route path="/#/lab7" exact component={Lab7} />
      <Route path="/#/lab7" exact component={Lab7} />
      <Route path="/lab7" exact component={Lab7} />
      <Route path="/lab7" exact component={Lab7} />
      
      <Route path="/#/lab8" exact component={Lab8} />
      <Route path="/#/lab8" exact component={Lab8} />
      <Route path="/lab8" exact component={Lab8} />
      <Route path="/lab8" exact component={Lab8} />

      <Route path="/#/lab9" exact component={Lab9} />
      <Route path="/#/lab9" exact component={Lab9} />
      <Route path="/lab9" exact component={Lab9} />
      <Route path="/lab9" exact component={Lab9} />
    </Switch>
  );
}
