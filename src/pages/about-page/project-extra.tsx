import { Box, Button } from '@mui/material';
import React from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { useRootDispatch } from '../../store/hooks';
import { createAboutDeleteProjectThunkAction } from '../../store/action-creators';

type ProjectExtraProps = {
  id: string,
};

const ProjectExtra: React.FC<ProjectExtraProps> = ({ id }) => {
  const dispatch = useRootDispatch();

  return (
    <Box>
      <Button
        variant="text"
        sx={{
          color: 'primary.main',
          ':hover': {
            color: 'primary.dark',
          },
        }}
        onClick={(e) => { dispatch(createAboutDeleteProjectThunkAction(id)); }}
      >
        <ClearIcon />
      </Button>
      <Button
        variant="text"
        sx={{
          color: 'primary.main',
          ':hover': {
            color: 'primary.dark',
          },
        }}
        onClick={(e) => { alert('feature coming soon'); }}
      >
        <ArrowDropDownIcon />
      </Button>
      <Button
        variant="text"
        sx={{
          zIndex: '5',
          color: 'primary.main',
          ':hover': {
            color: 'primary.dark',
          },
        }}
        onClick={(e) => { alert('feature coming soon'); }}
      >
        <ArrowDropUpIcon />
      </Button>
    </Box>
  );
};

export default ProjectExtra;