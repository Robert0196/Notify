import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';

export default function FixedBottomNavigation({changePage}) {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Personal" icon={<PersonIcon />} onClick={() => changePage(0)} />
          <BottomNavigationAction label="Shared" icon={<GroupIcon />} onClick={() => changePage(1)}/>
          <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} onClick={() => changePage(2)} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}