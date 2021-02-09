import Modal from "../commonComponents/Modal";
import CreateCriteriaForm from "./CreateCriteriaForm";

const CreateCriteriaModal = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Create New Criteria"
      content="Content"
    >
      <CreateCriteriaForm />
    </Modal>
  );
};

export default CreateCriteriaModal;
