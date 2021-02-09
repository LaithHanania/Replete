import {cloneElement} from 'react';
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";

const Modal = ({ open, onClose, title, children, actions }) => {
  return (
    <Dialog open={open}>
      <MuiDialogTitle>{title}</MuiDialogTitle>
      <MuiDialogContent>{cloneElement(children, {onCancel: onClose})}</MuiDialogContent>
      <MuiDialogActions/>
    </Dialog>
  );
};

export default Modal;
