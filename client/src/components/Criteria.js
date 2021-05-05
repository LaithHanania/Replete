import React, { useEffect, useCallback, useState } from "react";
import { getCriteria, deleteCriteria } from "repository/index";
import Title from "commonComponents/Title";
import PrimaryButton from "commonComponents/PrimaryButton";
import CreateCriteriaModal from "./CreateCriteriaModal";
import CircularProgress from "@material-ui/core/CircularProgress";
import SingleCriteriaCard from "./SingleCriteriaCard";
import Box from "@material-ui/core/Box";
import { LIGHT_GREY, PRIMARY } from "helpers/constants";

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
    <Box paddingTop="16px" border={6} borderRadius={4} borderColor={PRIMARY}>
      <Box paddingLeft="16px">
        <Title text="Your Criteria" />
      </Box>
      {isFetchingCriteria && !criteria ? (
        <CircularProgress />
      ) : (
        <>
          <Box
            paddingBottom="12px"
            height="291px"
            style={{ overflowY: "scroll", overflowX: "hidden" }}
            paddingX="16px"
          >
            {criteria.length ? (
              criteria.map(({ label, weight, _id, description }) => {
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
              })
            ) : (
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                height="100%"
                p={1}
                m={1}
              >
                <Box
                  color="gray"
                  fontStyle="italic"
                  paddingBottom="8px"
                  p={1}
                  textAlign="center"
                >
                  Create your criteria here! Criteria are what you want to
                  evaluate your events according to and represent what matters
                  to you in your life.
                </Box>
                <Box p={1}>
                  <PrimaryButton onClick={handleOpen} text="Create Criteria" />
                </Box>
              </Box>
            )}
          </Box>
          <Box
            borderTop={1}
            paddingLeft="16px"
            bgcolor={LIGHT_GREY}
            borderColor={LIGHT_GREY}
          >
            {criteria.length ? (
              <Box marginTop="8px" paddingBottom="8px">
                <PrimaryButton onClick={handleOpen} text="Create" />
              </Box>
            ) : null}
          </Box>
          <CreateCriteriaModal
            criteria={criteria}
            open={open}
            onClose={handleClose}
            onSubmit={handleSubmit}
            editingInitialValues={editingInitialValues}
            selectedId={selectedId}
          />
        </>
      )}
    </Box>
  );
};

export default React.memo(Criteria);
