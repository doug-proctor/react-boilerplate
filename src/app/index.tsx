/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { useInjectReducer } from 'redux-injectors';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';
import { routes } from 'app/routes';
import { request } from 'utils/request';
import { UserType } from 'types/User';
import config from 'utils/config';

import { authSliceKey, reducer, storeUser, selectAuth } from 'auth/slice';

import { HomePage } from './containers/HomePage';
import { LoginPage } from './containers/LoginPage';
import { ThingPage } from './containers/ThingPage';
import { ThingsPage } from './containers/ThingsPage';
import { RegisterPage } from './containers/RegisterPage/Loadable';
import { ScrollToTop } from 'app/components/ScrollToTop';
import { LoadingIndicator } from 'app/components/LoadingIndicator';
import { NotFoundPage } from './components/NotFoundPage/Loadable';

export function App() {
  useInjectReducer({ key: authSliceKey, reducer: reducer });

  const dispatch = useDispatch();

  const [authChecked, setAuthChecked] = React.useState(false);

  React.useEffect(() => {
    const startTime = new Date().getTime();

    const checkAuth = async () => {
      try {
        const user = await request(config.api.url + '/user');
        dispatch(storeUser(user as UserType));
        removeLoadingIndicator(startTime);
      } catch (e) {
        removeLoadingIndicator(startTime);
      }
    };

    checkAuth();
  }, [dispatch]);

  const removeLoadingIndicator = startTime => {
    const endTime = new Date().getTime();
    const diff = endTime - startTime;
    if (diff > 750) {
      setAuthChecked(true);
    } else {
      setTimeout(() => setAuthChecked(true), 750 - diff);
    }
  };

  const auth = useSelector(selectAuth);

  if (!authChecked) {
    return <LoadingIndicator fullScreen />;
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>

      <Switch>
        <Route exact path={routes.HOME} component={HomePage} />
        <Route exact path={routes.LOGIN} component={LoginPage} />
        <Route exact path={routes.REGISTER} component={RegisterPage} />

        {auth.isAuth && (
          <Route exact path={routes.THING} component={ThingPage} />
        )}
        {auth.isAuth && (
          <Route exact path={routes.THINGS} component={ThingsPage} />
        )}

        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
