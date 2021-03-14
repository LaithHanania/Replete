import React, { useEffect, useCallback, useState } from "react";
import { getCriteria } from "../repository/index";
import Title from '../commonComponents/Title';
import CreateCriteriaModal from "./CreateCriteriaModal";
import PrimaryButton from "../commonComponents/PrimaryButton";
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
    setCriteria(data);
    setIsFetchingCriteria(false);
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
      <Title text = 'Your Criteria' />
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
          <PrimaryButton onClick={handleOpen} text="Create" />
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
