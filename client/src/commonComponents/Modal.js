import React from 'react';
import { cloneElement } from "react";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import Proptypes from "prop-types";

const Modal = ({ open, onClose, title, children }) => {
  return (
    <Dialog open={open}>
      <MuiDialogTitle>{title}</MuiDialogTitle>
      <MuiDialogContent>
        {cloneElement(children, { onCancel: onClose })}
      </MuiDialogContent>
      <MuiDialogActions />
    </Dialog>
  );
};

Modal.propTypes = {
  open: Proptypes.bool.isRequired,
  onClose: Proptypes.func.isRequired,
  title: Proptypes.oneOfType([Proptypes.node, Proptypes.string]).isRequired,
  children: Proptypes.oneOfType([
    Proptypes.arrayOf(Proptypes.node),
    Proptypes.node,
  ]).isRequired,
};

export default Modal;
