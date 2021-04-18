import React from "react";
import Modal from "commonComponents/Modal";
import CreateCustomEventForm from "./CreateCustomEventForm";
import Proptypes from "prop-types";

const CreateCustomEventModal = ({ open, onClose, onSubmit }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Create New Custom Event"
      content="Content"
    >
      <CreateCustomEventForm onCancel={onClose} onSubmit={onSubmit} />
    </Modal>
  );
};

CreateCustomEventModal.propTypes = {
  open: Proptypes.bool.isRequired,
  onClose: Proptypes.func.isRequired,
  onSubmit: Proptypes.func.isRequired,
};

export default CreateCustomEventModal;
