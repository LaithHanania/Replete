import React, { useEffect, useCallback, useState } from "react";
import { getEvents, getCriteria } from "../repository/index";
import Title from "../commonComponents/Title";
import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";
import SingleEventCard from "./SingleEventCard";
import PrimaryButton from "../commonComponents/PrimaryButton";
import CreateEventModal from "./CreateEventModal";
import EventsChart from "./EventsChart";
import ReactPaginate from "react-paginate";

const Events = () => {
  const [isFetchingEvents, setIsFetchingEvents] = useState(true);
  const [isFetchingCriteria, setIsFetchingCriteria] = useState(true);
  const [criteria, setCriteria] = useState([]);
  const [events, setEvents] = useState([]);
  const [open, setOpen] = useState(false);
  const [pageSelected, setPageSelected] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    setIsFetchingEvents(true);
    fetchEvents();
    handleClose();
  };

  const fetchEvents = useCallback(async () => {
    const data = await getEvents({ page: pageSelected, limit: 3 });
    setEvents(data?.events);
    setPageCount(Math.ceil(data.eventCount / 3));
    setIsFetchingEvents(false);
  }, [pageSelected]);

  const fetchCriteria = useCallback(async () => {
    const data = await getCriteria();
    setCriteria(data);
    setIsFetchingCriteria(false);
  }, []);

  useEffect(() => {
    fetchEvents();
    fetchCriteria();
  }, [fetchEvents, fetchCriteria, pageSelected]);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setPageSelected(selectedPage + 1);
    console.log(pageSelected);
  };

  return (
    <Paper style={{ padding: 16 }}>
      <Title text="Your Events" />
      {isFetchingEvents | isFetchingCriteria ? (
        <CircularProgress />
      ) : (
        <div>
          <EventsChart events={events} />
          {events.map(({ date, label, description, _id }) => (
            <SingleEventCard
              date={date}
              label={label}
              description={description}
              _id={_id}
              key={_id}
            />
          ))}
          <PrimaryButton text="Create Event" onClick={handleOpen} />
          <CreateEventModal
            open={open}
            onClose={handleClose}
            onSubmit={handleSubmit}
            criteria={criteria}
          />
          <ReactPaginate
            previousLabel={"prev"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        </div>
      )}
    </Paper>
  );
};

export default Events;
