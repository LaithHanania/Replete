import React from 'react';
import Modal from "../commonComponents/Modal";
import CreateEventForm from "./CreateEventForm";
import Proptypes from "prop-types";

const CreateEventModal = ({ open, onClose, onSubmit, criteria }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Create New Event"
      content="Content"
    >
      <CreateEventForm
        onCancel={onClose}
        onSubmit={onSubmit}
        criteria={criteria}
      />
    </Modal>
  );
};

CreateEventModal.propTypes = {
  open: Proptypes.bool.isRequired,
  onClose: Proptypes.func.isRequired,
  onSubmit: Proptypes.func.isRequired,
  criteria: Proptypes.array,
};

export default CreateEventModal;
