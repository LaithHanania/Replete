import React from "react";
import Modal from "commonComponents/Modal";
import CreateEventForm from "./CreateEventForm";
import Proptypes from "prop-types";

const CreateEventModal = ({ open, onClose, onSubmit, initialValues }) => {
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
        initialValues={initialValues}
      />
    </Modal>
  );
};

CreateEventModal.propTypes = {
  open: Proptypes.bool.isRequired,
  onClose: Proptypes.func.isRequired,
  onSubmit: Proptypes.func.isRequired,
  initialValues: Proptypes.shape({
    label: Proptypes.string,
    description: Proptypes.string,
    eventCriterias: Proptypes.arrayOf(
      Proptypes.shape({
        label: Proptypes.string,
        value: Proptypes.number,
      })
    ),
  }),
};

export default CreateEventModal;
