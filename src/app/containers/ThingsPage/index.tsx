/**
 *
 * ThingsPage
 *
 */

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';

import route from 'app/routes';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, actions } from './slice';
import { selectThingsPage } from './selectors';
import { thingsPageSaga } from './saga';

import { Header } from 'app/components/Header';
import { Container } from 'app/components/Container';

interface Props {}

export function ThingsPage(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: thingsPageSaga });

  const thingsPage = useSelector(selectThingsPage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.loadThings());
  }, [dispatch]);

  // Render

  const renderThings = () => {
    if (thingsPage.thingsError) {
      return 'There was an error';
    }

    if (thingsPage.thingsLoading) {
      return 'loading...';
    }

    return thingsPage.things.map(thing => (
      <div key={thing.name}>
        <Link to={route('THING', { thingName: thing.name })}>{thing.name}</Link>
      </div>
    ));
  };

  return (
    <>
      <Helmet>
        <title>ThingsPage</title>
        <meta name="description" content="Description of ThingsPage" />
      </Helmet>
      <Header />
      <Container>
        <h1>Things</h1>
        {renderThings()}
      </Container>
    </>
  );
}
