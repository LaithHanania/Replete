import React, { useEffect, useState, useCallback } from "react";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import { getCustomEvents } from "repository/index";
import Title from "commonComponents/Title";
import PrimaryButton from "commonComponents/PrimaryButton";
import CustomEventsTable from "./CustomEventsTable";
import CreateCustomEventModal from "./CreateCustomEventModal";
import { PRIMARY, LIGHT_GREY } from "helpers/constants";

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
    <Box paddingTop="16px" border={6} borderRadius={4} borderColor={PRIMARY}>
      <Box paddingX="16px">
        <Title text="Your Custom Events" />
      </Box>
      {customEvents?.length ? (
        <>
          <Box paddingX="16px" paddingBottom="12px" height="292px">
            <CustomEventsTable customEvents={customEvents} />
          </Box>
          <Box
            paddingX="16px"
            paddingTop="12px"
            paddingY="8px"
            bgcolor={LIGHT_GREY}
          >
            <PrimaryButton text="Create" onClick={handleOpen} />
          </Box>
        </>
      ) : (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="356px"
          paddingX="16px"
        >
          <Box
            color="gray"
            fontStyle="italic"
            paddingBottom="16px"
            textAlign="center"
          >
            Create your custom events here! Custom events are events that are
            repeated often and you would like to use as a basis to add new
            events.
          </Box>
          <Box>
            <PrimaryButton onClick={handleOpen} text="Create Custom Events" />
          </Box>
        </Box>
      )}
      <CreateCustomEventModal
        open={isCreateFormOpen}
        onClose={handleClose}
        onSubmit={handleSubmit}
      />
    </Box>
  );
};

export default React.memo(CustomEvents);
