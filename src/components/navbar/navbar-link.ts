import { styled } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { baseFontSize } from '../../helpers/structure-constants';

const NavbarLink = styled(NavLink)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.primary.main,
  textDecoration: 'none',
  alignSelf: 'stretch',
  marginRight: '4rem',
  fontSize: baseFontSize,
  textTransform: 'uppercase',
  letterSpacing: '0.1rem',
  transition: theme.transitions.create('color'),

  '&.active': {
    color: theme.palette.primary.dark,
  },

  ':hover': {
    color: theme.palette.primary.dark,
  },
  [theme.breakpoints.down('lg')]: {
    marginRight: '2rem',
  },
  [theme.breakpoints.down('ml')]: {
    marginRight: '1rem',
  },
  [theme.breakpoints.down('sm')]: {
    marginRight: '0',
  },
}));

export default NavbarLink;
