import React from 'react';
import Button from "@material-ui/core/Button";
import Dialog from '@material-ui/core/Dialog';

const AlertBox = ({message='', topic="", show, onHide}) => {
    return (
        <Dialog onClose={onHide} aria-labelledby="alert-dialog" open={show}>
                <h2 >{topic}</h2>
                <p>{message}</p>
                <hr/>
                <Button variant="contained" color="secondary" disableElevation onClick={onHide}>
                    Close
                </Button>
        </Dialog>
    )
}

export default AlertBox;