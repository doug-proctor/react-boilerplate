/**
 *
 * Header
 *
 */
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';
import { useSelector, useDispatch } from 'react-redux';

import { request } from 'utils/request';
import config from 'utils/config';
import route from 'app/routes';

import { deleteUser, selectAuth } from 'auth/slice';

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
          <Link to={route('HOME')}>Home</Link>
          <NavItems>
            {auth.isAuth && (
              <NavItem>
                <Link to={route('THINGS')}>Things</Link>
              </NavItem>
            )}
            {auth.isAuth && (
              <NavItem>
                <button onClick={logout}>Logout {auth.user.name}</button>
              </NavItem>
            )}
            {!auth.isAuth && (
              <NavItem>
                <Link to={route('LOGIN')}>Login</Link>
              </NavItem>
            )}
            {!auth.isAuth && (
              <NavItem>
                <Link to={route('REGISTER')}>Register</Link>
              </NavItem>
            )}
          </NavItems>
        </Flex>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border-bottom: 1px solid ${props => props.theme.colors.black};
  padding: 1rem;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NavItems = styled.div`
  display: flex;
`;

const NavItem = styled.div`
  margin-left: 10px;
`;
