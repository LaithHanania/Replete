import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { getEvent } from "repository/index";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Box, Typography } from "@material-ui/core";
import Title from "commonComponents/Title";

const Event = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [event, setEvent] = useState([]);

  const params = useParams();
  const fetchEvent = useCallback(async () => {
    setIsLoading(true);
    const data = await getEvent(params.id);
    setEvent(data);
    setIsLoading(false);
  }, [params.id]);

  useEffect(() => {
    fetchEvent();
  }, [fetchEvent]);

  return (
    <>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          <Title text={event.label} />
          <Typography variant="h5" color="textSecondary">
            {event.date}
          </Typography>
          {!!event.description && <Box>{event.description}</Box>}
          {event.eventCriterias && (
            <div>
              {event.eventCriterias.map((criterias) => (
                <div key={criterias.label}>
                  {criterias.label} : {criterias.weight} :{" "}
                  {criterias.description}
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Event;
