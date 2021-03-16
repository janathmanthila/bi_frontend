import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Button from "@material-ui/core/Button";

const ConfirmBox = ({message='Are You Sure?', topic="", confirmButtonText="Proceed", confirmButtonColor="primary", onConfirm, show, onHide}) => {
    return (

        <Dialog onClose={onHide} aria-labelledby="confirm-dialog" open={show}>
            <DialogTitle id="confirm-dialog-title">{topic}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {message}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onHide} color="primary">
                    Cancel
                </Button>
                <Button onClick={onConfirm} color={confirmButtonColor} autoFocus>
                    {confirmButtonText}
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ConfirmBox;