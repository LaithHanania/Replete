import React, { useEffect, useCallback, useState } from "react";
import { getEvents } from "repository/index";
import Title from "commonComponents/Title";
import PrimaryButton from "commonComponents/PrimaryButton";
import CircularProgress from "@material-ui/core/CircularProgress";
import SingleEventCard from "./SingleEventCard";
import CreateEventModal from "./CreateEventModal";
import EventsChart from "./EventsChart";
import Pagination from "@material-ui/lab/Pagination";
import Box from "@material-ui/core/Box";

//TODO: Make this component into multiple components
//TODO: allow the user set the limit of events per page
//TODO: Conditionally render pagination

const Events = () => {
  const [isFetchingEvents, setIsFetchingEvents] = useState(true);
  const [createFromCustomObject, setCreateFromCustomObject] = useState(null);
  const [events, setEvents] = useState([]);
  const [open, setOpen] = useState(false);
  const [pageSelected, setPageSelected] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const limit = 5;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setCreateFromCustomObject(null);
    setOpen(false);
  };

  const handleSubmit = () => {
    setIsFetchingEvents(true);
    fetchEvents();
    handleClose();
  };

  const fetchEvents = useCallback(async () => {
    const data = await getEvents({ page: pageSelected, limit: limit });
    setEvents(data?.events);
    setPageCount(Math.ceil(data.eventCount / limit));
    setIsFetchingEvents(false);
  }, [pageSelected]);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  useEffect(() => {
    window.addEventListener("createFromCustomEvent", ({ detail }) => {
      setCreateFromCustomObject(detail);
      setOpen(true);
    });
    return window.removeEventListener("createFromCustomEvent", () => {});
  }, []);

  const handlePageClick = (event, value) => {
    setPageSelected(value);
  };

  return (
    <Box padding="16px" marginTop="16px">
      <Title text="Your Events" />
      {isFetchingEvents ? (
        <CircularProgress />
      ) : (
        <>
          <EventsChart events={events} />
          <Box
            display="flex"
            justifyContent="center"
            flexDirection="column"
            width="100%"
          >
            <Box paddingBottom={2} justifyContent="center">
              {events.map(({ date, label, description, _id }) => (
                <SingleEventCard
                  date={date}
                  label={label}
                  description={description}
                  _id={_id}
                  key={_id}
                />
              ))}
            </Box>
            {!events.length ? (
              <>
                <Box color="gray" fontStyle="italic" paddingBottom="16px">
                  *Until you create events, the graph shown is just an example
                  graph, no real data has been recorded yet.
                </Box>
                <Box
                  color="gray"
                  fontStyle="italic"
                  paddingBottom="16px"
                  textAlign="center"
                >
                  Create your events here! An event could be anything that
                  happened throughout the day that you would like to measure the
                  effect of.
                </Box>
              </>
            ) : null}
            <Box display="flex" justifyContent="center">
              <PrimaryButton text="Create Event" onClick={handleOpen} />
            </Box>
          </Box>
          <CreateEventModal
            open={open}
            onClose={handleClose}
            onSubmit={handleSubmit}
            initialValues={createFromCustomObject}
          />
          <Box display="flex" justifyContent="center" paddingTop="16px">
            <Pagination
              count={pageCount}
              showFirstButton
              showLastButton
              onChange={handlePageClick}
            />
          </Box>
        </>
      )}
    </Box>
  );
};

export default React.memo(Events);
