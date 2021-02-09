import { useState } from "react";
import { useUser } from "../contexts/User/UserState";
import LoggedOutWarning from "./../commonComponents/LoggedOutWarning";
import CreateCriteriaModal from "./CreateCriteriaModal";
import Button from "@material-ui/core/Button";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [userState] = useUser();
  const { user } = userState;

  return !!user ? (
    <div>
      <Button onClick={handleOpen}>Create</Button>
      <CreateCriteriaModal open={open} onClose={handleClose} />
    </div>
  ) : (
    <LoggedOutWarning />
  );
};

export default Dashboard;
