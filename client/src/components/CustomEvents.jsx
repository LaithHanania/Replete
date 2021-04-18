import React, { useEffect, useState, useCallback } from "react";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import { getCustomEvents } from "repository/index";
import Title from "commonComponents/Title";
import PrimaryButton from "commonComponents/PrimaryButton";
import CustomEventsTable from "./CustomEventsTable";
import CreateCustomEventModal from "./CreateCustomEventModal";

const CustomEvents = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [customEvents, setCustomEvents] = useState(null);
  const [isCreateFormOpen, setIsCreateFormOpen] = useState(false);

  const fetchCustomEvents = useCallback(async () => {
    setIsLoading(true);
    const response = await getCustomEvents();
    setCustomEvents(response);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchCustomEvents();
  }, [fetchCustomEvents]);

  const handleOpen = () => {
    setIsCreateFormOpen(true);
  };

  const handleClose = () => {
    setIsCreateFormOpen(false);
  };

  const handleSubmit = () => {
    setIsLoading(true);
    fetchCustomEvents();
    handleClose();
  };

  return isLoading ? (
    <CircularProgress />
  ) : (
    <Box
      paddingX="16px"
      paddingTop="16px"
      border={2}
      height="100%"
      borderRadius={16}
    >
      <Title text="Your Custom Events" />
      <CustomEventsTable
        customEvents={customEvents}
      />
      <PrimaryButton text="Create" onClick={handleOpen} />
      <CreateCustomEventModal
        open={isCreateFormOpen}
        onClose={handleClose}
        onSubmit={handleSubmit}
      />
    </Box>
  );
};

export default React.memo(CustomEvents);
