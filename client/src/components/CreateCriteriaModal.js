import React from "react";
import Modal from "commonComponents/Modal";
import CreateCriteriaForm from "./CreateCriteriaForm";
import Proptypes from "prop-types";

const CreateCriteriaModal = ({
  criteria,
  open,
  onClose,
  onSubmit,
  editingInitialValues,
  selectedId,
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Create New Criteria"
      content="Content"
    >
      <CreateCriteriaForm
        criteria={criteria}
        onCancel={onClose}
        onSubmit={onSubmit}
        editingInitialValues={editingInitialValues}
        selectedId={selectedId}
      />
    </Modal>
  );
};

CreateCriteriaModal.propTypes = {
  criteria: Proptypes.array,
  open: Proptypes.bool.isRequired,
  onClose: Proptypes.func.isRequired,
  onSubmit: Proptypes.func.isRequired,
  editingInitialValues: Proptypes.shape({
    label: Proptypes.string,
    weight: Proptypes.number,
    description: Proptypes.string,
  }),
  selectedId: Proptypes.string,
};

export default CreateCriteriaModal;
