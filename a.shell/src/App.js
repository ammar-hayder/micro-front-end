import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import { createBrowserHistory } from 'history';

import Progress from './components/common/Progress';
import Header from './components/common/Header';

const HomeLazy = lazy(() => import('./components/HomeApp'));
const AuthLazy = lazy(() => import('./components/AuthenticationApp'));
const DashboardLazy = lazy(() => import('./components/DashboardApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

const history = createBrowserHistory();

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (isSignedIn) {
      history.push('/dashboard');
    }
  }, [isSignedIn]);

  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <div>

          <Suspense fallback={<Progress />}>
            <Header
              onSignOut={() => setIsSignedIn(false)}
              isSignedIn={isSignedIn}
            />
            
            <div className="main-content">
              <Switch>
                <Route path="/auth">
                  <AuthLazy onSignIn={() => setIsSignedIn(true)} />
                </Route>
                <Route path="/dashboard">
                  {!isSignedIn && <Redirect to="/" />}
                  <DashboardLazy />
                </Route>
                <Route path="/" component={HomeLazy} />
              </Switch>
            </div>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  );
};
