/**
 *
 * ThingPage
 *
 */

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, actions } from './slice';
import { selectThingPage } from './selectors';
import { thingPageSaga } from './saga';

import { Header } from 'app/components/Header';
import { Container } from 'app/components/Container';

export function ThingPage(props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: thingPageSaga });

  const thingPage = useSelector(selectThingPage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.loadThing(props.match.params.thingName));
  }, [dispatch, props.match.params.thingName]);

  // Render

  const renderThing = () => {
    if (thingPage.thingError) {
      return 'There was an error';
    }

    if (thingPage.thingLoading) {
      return 'loading...';
    }

    return <Container>{thingPage.thing.name}</Container>;
  };

  return (
    <>
      <Helmet>
        <title>ThingPage</title>
        <meta name="description" content="Description of ThingPage" />
      </Helmet>
      <Header />
      <Container>
        <h1>Thing</h1>
        {renderThing()}
      </Container>
    </>
  );
}
