import React, { useEffect, useCallback, useState } from "react";
import { getCriteria, deleteCriteria } from "repository/index";
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
  const [editingInitialValues, setEditingInitialValues] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setEditingInitialValues(null);
    setSelectedId(null);
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

  const handleDelete = async (label) => {
    setIsFetchingCriteria(true);
    await deleteCriteria(label);
    await fetchCriteria();
  };

  const handleEdit = (initialValues, id) => {
    setEditingInitialValues(initialValues);
    setSelectedId(id);
    setOpen(true);
  };

  useEffect(() => {
    fetchCriteria();
  }, [fetchCriteria]);

  return (
    <Box
      paddingX="16px"
      paddingTop="16px"
      border={2}
      borderRadius={16}
      height="100%"
    >
      <Title text="Your Criteria" />
      {isFetchingCriteria && !criteria ? (
        <CircularProgress />
      ) : (
        <div>
          <Box
            paddingBottom="12px"
            height="270px"
            style={{ overflowY: "scroll", overflowX: "hidden" }}
          >
            {criteria.map(({ label, weight, _id, description }) => {
              return (
                <SingleCriteriaCard
                  key={label}
                  label={label}
                  weight={weight}
                  id={_id}
                  onDelete={handleDelete}
                  onEdit={handleEdit}
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
            editingInitialValues={editingInitialValues}
            selectedId={selectedId}
          />
        </div>
      )}
    </Box>
  );
};

export default React.memo(Criteria);
