import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import Button from "../Boton";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
interface ModalPugleProps {
  title?: string;
  description: string;
  button: string;
  show: boolean;
  handleClose?: () => void;
}

const Modal = ({
  title,
  description,
  button,
  show,
  handleClose,
}: ModalPugleProps): JSX.Element => {
  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={show}
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        {title}
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>
        <Typography gutterBottom>{description}</Typography>
      </DialogContent>
      <DialogActions>
        <div
          style={{
            width: "120px",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Button
            variant="contained"
            data-testid="modal-bottom"
            onClick={handleClose}
          >
            {button}
          </Button>
        </div>
      </DialogActions>
    </BootstrapDialog>
  );
};

export default Modal;
