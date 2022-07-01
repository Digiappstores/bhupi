import React from "react";
import { Grid } from '@mui/material';
import { Button } from '@mui/material';
import { Dialog } from '@mui/material';
import { DialogTitle } from '@mui/material';
import {useState} from 'react';
import { DialogContent } from '@mui/material';
import { DialogContentText } from '@mui/material';
import { DialogActions } from '@mui/material';

function Popup() {

    const [open, setOpen] = useState(false); 
    
    const abc = () => {
        setOpen(true);
    };

    const xyz = () => {
        setOpen(false);
    };

    return (
        <>
            <Grid container height="100vh" direction="row" justifyContent="center" alignItems="center" >
                <Grid item xs={4} textAlign="center" p={2}>
                    <Button variant="contained" onClick={abc} >Click Me</Button>
                </Grid>
            </Grid>

            <Dialog open={open} onClose={xyz} aria-labelledby="dialog-title" aria-describedby="dialog-description" >
                <DialogTitle id="dialog-title" >Submit the test ?</DialogTitle>
                
                <DialogContent>
                    <DialogContentText id="dialog-description">
                        Are you sure you want to submit the test? you will not be able to edit after submitting.
                    </DialogContentText>
                </DialogContent>
                
                <DialogActions>
                    <Button onClick={xyz}>Cancel</Button>
                    <Button onClick={xyz}>Submit</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default Popup;