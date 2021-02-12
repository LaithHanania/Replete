import { useEffect, useCallback, useState } from "react";
import { getCriteria } from "../repository/index";
import Typography from "@material-ui/core/Typography";
import CreateCriteriaModal from "./CreateCriteriaModal";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";
import SingleCriteriaCard from "./SingleCriteriaCard";

const Criteria = () => {
  const [isFetchingCriteria, setIsFetchingCriteria] = useState(true);
  const [criteria, setCriteria] = useState([]);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchCriteria = useCallback(async () => {
    const data = await getCriteria();
    setIsFetchingCriteria(false);
    setCriteria(data);
  }, []);

  const handleSubmit = () => {
    setIsFetchingCriteria(true);
    fetchCriteria();
    handleClose();
  };

  useEffect(() => {
    fetchCriteria();
  }, [fetchCriteria]);

  return (
    <Paper style={{ padding: 16 }}>
      <Typography variant="h4">Your Criteria: </Typography>
      {isFetchingCriteria && !criteria ? (
        <CircularProgress />
      ) : (
        <div>
          {criteria.map(({ label, weight, description }) => {
            return (
              <SingleCriteriaCard
                key={label}
                label={label}
                weight={weight}
                description={description}
              />
            );
          })}
          <Button onClick={handleOpen}>Create</Button>
          <CreateCriteriaModal
            criteria={criteria}
            open={open}
            onClose={handleClose}
            onSubmit={handleSubmit}
          />
        </div>
      )}
    </Paper>
  );
};

export default Criteria;
