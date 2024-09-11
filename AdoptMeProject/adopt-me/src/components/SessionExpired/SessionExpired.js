import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

export const SessionExpired = ({ open, onClose }) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Session Expired</DialogTitle>
            <DialogContent>
                <p>Your session has expired. Please log in again.</p>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    ОК
                </Button>
            </DialogActions>
        </Dialog>
    );
};