import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// pages
import { PlanPage } from 'pages';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <PlanPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
