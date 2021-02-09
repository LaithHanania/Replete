import { useState, cloneElement } from "react";
import Button from "@material-ui/core/Button";

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

export default ModalOpenButton;
