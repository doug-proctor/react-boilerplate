/**
 *
 * Header
 *
 */
import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';
import { useSelector, useDispatch } from 'react-redux';

import { request } from 'utils/request';
import config from 'utils/config';
import route from 'app/routes';

import { deleteUser, selectAuth } from 'auth/slice';

import { A } from 'app/components/A';
import { Button } from 'app/components/Button';
import { Container } from 'app/components/Container';

interface Props {}

export function Header(props: Props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const auth = useSelector(selectAuth);

  const logout = async () => {
    await request(config.api.logout, { method: 'post' });

    dispatch(deleteUser());

    history.push('/');
  };

  return (
    <Wrapper>
      <Container>
        <Flex>
          <A to={route('HOME')}>Home</A>
          <NavItems>
            {auth.isAuth && (
              <NavItem>
                <A to={route('THINGS')}>Things</A>
              </NavItem>
            )}
            {auth.isAuth && (
              <NavItem>
                <Button secondary sm onClick={logout}>
                  Logout {auth.user.name}
                </Button>
              </NavItem>
            )}
            {!auth.isAuth && (
              <NavItem>
                <A to={route('LOGIN')}>Login</A>
              </NavItem>
            )}
            {!auth.isAuth && (
              <NavItem>
                <Button primary sm to={route('REGISTER')}>
                  Register
                </Button>
              </NavItem>
            )}
          </NavItems>
        </Flex>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.3);
  padding: 1rem 0;
`;

const Flex = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
`;

const NavItems = styled.div`
  align-items: center;
  display: flex;
`;

const NavItem = styled.div`
  margin-left: 10px;
`;
