/**
 *
 * HomePage
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';

import { selectAuth } from 'auth/slice';

import { Header } from 'app/components/Header';
import { Container } from 'app/components/Container';

export function HomePage() {
  const auth = useSelector(selectAuth);
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="Description of HomePage" />
      </Helmet>
      <Header />
      <Container>
        <h1>Home</h1>
        {auth.isAuth && <div>You are logged in.</div>}
        {!auth.isAuth && <div>You are not logged in.</div>}
      </Container>
    </>
  );
}
