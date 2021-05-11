import React, { useEffect, useCallback, useState } from "react";
import { getCalendar } from "repository/index";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
// eslint-disable-next-line no-unused-vars
import style from "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import Box from "@material-ui/core/Box";

const localizer = momentLocalizer(moment);

const Calendar = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [calendarDetails, setCalendarDetails] = useState(null);
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

  const fetchGoogleCalendar = useCallback(async () => {
    const response = await getCalendar();
    setCalendarDetails(response?.data?.data?.items);
    console.log(response);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchGoogleCalendar();
  }, [fetchGoogleCalendar]);

  return isLoading || !calendarDetails ? (
    <div>wait...</div>
  ) : (
    <Box>
      <BigCalendar
        localizer={localizer}
        defaultView="month"
        events={transformedEvents}
        style={{ height: "90vh" }}
      />
    </Box>
  );
};

export default Calendar;
