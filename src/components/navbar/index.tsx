import React from 'react';
import {
  AppBar,
  Container,
  Toolbar,
  Box,
} from '@mui/material';
import NavbarLink from './navbar-link';
import { useRootSelector } from '../../store';
import { selectAuthAdmin } from '../../store/selectors';
import { useRootDispatch } from '../../store/hooks';
import { authLogoutAction } from '../../store/action-creators';
import CustomButton from '../custom-button/custom-button';
import { pageSide } from '../../helpers/structure-constants';

const Navbar: React.FC = () => {
  const adminLoggedIn = useRootSelector(selectAuthAdmin);
  const dispatch = useRootDispatch();

  const logout = () => {
    dispatch(authLogoutAction);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: 'primary.light',
        border: 0,
        boxShadow: 'none',
        px: pageSide,
      }}
    >
      <Toolbar
        sx={{
          justifyContent: { xxs: 'space-around', md: 'space-between' },
          m: 0,
        }}
        disableGutters
      >
        <Container
          sx={{
            display: { md: 'flex' },
            m: 0,
          }}
          disableGutters
        >
          <NavbarLink to="/portfolio">Portfolio</NavbarLink>
          <NavbarLink to="/about">About</NavbarLink>
          <NavbarLink to="/contacts">Contact</NavbarLink>
          { adminLoggedIn
            ? <NavbarLink to="/admin">Admin</NavbarLink> : null}
        </Container>
        { adminLoggedIn
          ? (
            <CustomButton
              sx={{
                display: {
                  xxs: 'none',
                  lg: 'block',
                },
              }}
              onClick={logout}
              btnLabel="Logout"
            />
          ) : null}
        <NavbarLink
          to="/"
          sx={{
            p: 0,
            m: { xxs: '0 1rem 0 0', lg: '0 2rem 0 0' },
            transform: {
              xxs: 'translateX(2.5rem)',
              xs: 'translateX(3.5rem)',
              lg: 'translateX(5.5rem)',
            },
          }}
        >
          <Box
            component="img"
            src="https://i.postimg.cc/ry4S1T1Z/gerard-a-logo.png"
            sx={{
              maxWidth: '20rem',
              width: { xxs: '12.5rem', xs: '15rem', lg: '20rem' },
              height: 'auto',
              p: 0,
              m: 0,
            }}
          />

        </NavbarLink>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
