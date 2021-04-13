import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Dashboard from './pages/dashboard';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} />
    </BrowserRouter>
  );
}

export default Routes;
