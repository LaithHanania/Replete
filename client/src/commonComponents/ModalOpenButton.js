import React, { useState, cloneElement } from "react";
import Button from "@material-ui/core/Button";
import Proptypes from "prop-types";

const ModalOpenButton = ({ buttonText, children }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>{buttonText}</Button>
      {cloneElement(children, { open: open, handleClose: handleClose })}
    </div>
  );
};

ModalOpenButton.propTypes = {
  buttonText: Proptypes.string,
  children: Proptypes.node,
};

export default ModalOpenButton;
