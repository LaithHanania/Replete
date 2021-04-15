import React, { useEffect, useCallback, useState } from "react";
import { getCriteria } from "repository/index";
import Title from "commonComponents/Title";
import PrimaryButton from "commonComponents/PrimaryButton";
import CreateCriteriaModal from "./CreateCriteriaModal";
import CircularProgress from "@material-ui/core/CircularProgress";
import SingleCriteriaCard from "./SingleCriteriaCard";
import Box from "@material-ui/core/Box";

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
    <Box style={{ padding: 16 }}>
      <Title text="Your Criteria" />
      {isFetchingCriteria && !criteria ? (
        <CircularProgress />
      ) : (
        <div>
          <Box paddingBottom={1}>
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
          </Box>
          <PrimaryButton onClick={handleOpen} text="Create" />
          <CreateCriteriaModal
            criteria={criteria}
            open={open}
            onClose={handleClose}
            onSubmit={handleSubmit}
          />
        </div>
      )}
    </Box>
  );
};

export default Criteria;
