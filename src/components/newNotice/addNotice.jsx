import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { CKEditor } from 'ckeditor4-react';

export default function AddNotice() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    //add new notice to personal
    

    setOpen(false);
  };


  return (
    <div>
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="primary" aria-label="add" sx={{ position: 'absolute', bottom: 60, right: 16 }} onClick={handleClickOpen}>
        <AddIcon />
      </Fab>
    </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New notice</DialogTitle>
        <DialogContent>
          <CKEditor
                // initData=""
                onInstanceReady={ () => {
                    console.log( 'Editor is ready!' );
                } }
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}