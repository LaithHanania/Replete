import React from "react";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import { withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import AddBox from "@material-ui/icons/AddBox";
import PropTypes from "prop-types";

const HeaderCell = withStyles({
  root: {
    fontWeight: "bold",
  },
})(TableCell);

const CustomEventsTable = ({ customEvents }) => {
  return (
    <TableContainer style={{ maxHeight: "270px" }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <HeaderCell key="event">Event</HeaderCell>
            <HeaderCell key="description">Description</HeaderCell>
            <HeaderCell
              key="netValue"
              align="center"
              style={{ minWidth: "70px" }}
            >
              Net Value
            </HeaderCell>
            <HeaderCell>Create</HeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customEvents.map((event) => (
            <TableRow key={event.label}>
              <TableCell>{event.label}</TableCell>
              <TableCell>
                {event.description ?? (
                  <Box fontStyle="italic">No description</Box>
                )}
              </TableCell>
              <TableCell align="center">{event.netValue}</TableCell>
              <TableCell>
                <IconButton
                  onClick={() => {
                    const sendEvent = new CustomEvent("createFromCustomEvent", {
                      detail: event,
                    });
                    dispatchEvent(sendEvent);
                  }}
                >
                  <AddBox fontSize="small" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

CustomEventsTable.propTypes = {
  customEvents: PropTypes.arrayOf(
    PropTypes.shape({
      event: PropTypes.string,
      description: PropTypes.string | null,
      netValue: PropTypes.number,
    })
  ),
};

export default CustomEventsTable;
