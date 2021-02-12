import Modal from "../commonComponents/Modal";
import CreateCriteriaForm from "./CreateCriteriaForm";
import Proptypes from "prop-types";

const CreateCriteriaModal = ({ criteria, open, onClose, onSubmit }) => {
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
      />
    </Modal>
  );
};

CreateCriteriaModal.propTypes = {
  crieria: Proptypes.array,
  open: Proptypes.bool.isRequired,
  onClose: Proptypes.func.isRequired,
  onSubmit: Proptypes.func.isRequired,
};

export default CreateCriteriaModal;
