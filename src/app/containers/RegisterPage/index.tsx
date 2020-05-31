/**
 *
 * RegisterPage
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { storeUser } from 'auth/slice';

import { Header } from 'app/components/Header';
import { Container } from 'app/components/Container';

import Form from './Form';

export function RegisterPage() {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleRegister = user => {
    dispatch(storeUser(user));
    history.push('/');
  };
  return (
    <>
      <Helmet>
        <title>RegisterPage</title>
        <meta name="description" content="Description of RegisterPage" />
      </Helmet>
      <Header />
      <Container>
        <h1>Register</h1>
        <Form onRegister={handleRegister} />
      </Container>
    </>
  );
}
