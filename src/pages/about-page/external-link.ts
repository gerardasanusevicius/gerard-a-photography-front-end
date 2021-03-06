import { styled, Button } from '@mui/material';
import { baseFontSize } from '../../helpers/structure-constants';

const ExternalLink = styled(Button)(({ theme }) => ({
  display: 'flex',
  color: theme.palette.primary.main,
  fontSize: baseFontSize,
  textTransform: 'uppercase',
  letterSpacing: '0.1rem',
  margin: '0 auto',

  '&.active': {
    color: theme.palette.primary.dark,
  },

  ':hover': {
    color: theme.palette.primary.dark,
    background: 'none',
  },
}));

export default ExternalLink;
