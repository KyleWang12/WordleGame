import { Snackbar, Alert } from '@mui/material';


export default function ErrorPopUp(props) {

    

    return (
        <Snackbar open={props.open}
            autoHideDuration={2000}
            onClose={props.handleClose}
            anchorOrigin={{
                vertical: "top",
                horizontal: "center"
            }}
            sx={{ height: '100%' }}
        >
            <Alert onClose={props.handleClose} severity="warning">
                {props.message}
            </Alert>
        </Snackbar>
    );
}
