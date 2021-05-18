import React, { useEffect, useCallback, useState } from "react";
import { getMonthEvents } from "repository/index";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
// eslint-disable-next-line no-unused-vars
import style from "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import Box from "@material-ui/core/Box";

const localizer = momentLocalizer(moment);

const Calendar = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [calendarDetails, setCalendarDetails] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentView, setCurrentView] = useState("month");
  console.log(currentDate);

  const transformedEvents = calendarDetails?.map((event) => {
    const start = event.start.date
      ? new Date(`${event.start.date}T08:00:00`)
      : new Date(event.start.dateTime);
    const end = event.end.date
      ? new Date(`${event.start.date}T05:00:00`)
      : new Date(event.end.dateTime);

    return {
      start: start,
      end: end,
      title: event.summary,
      eventType: event.name,
      description: event.description,
      glink: event.htmlLink,
      meta: event,
    };
  });

  const fetchNewEvents = useCallback(async () => {
    setIsLoading(true);
    setCalendarDetails(null);
    const response = await getMonthEvents(currentDate);
    setCalendarDetails(response?.data?.data?.items);
    setIsLoading(false);
  }, [currentDate]);

  useEffect(() => {
    fetchNewEvents();
  }, [currentDate]);

  return isLoading || !calendarDetails ? (
    <div>wait...</div>
  ) : (
    <Box>
      <BigCalendar
        localizer={localizer}
        events={transformedEvents}
        style={{ height: "90vh" }}
        onNavigate={(date) => {
          setCurrentDate(new Date(date));
        }}
        onView={(view) => {
          setCurrentView(view);
        }}
        view={currentView}
        date={currentDate}
      />
    </Box>
  );
};

export default Calendar;
