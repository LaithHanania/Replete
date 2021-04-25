import React from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Proptypes from "prop-types";
import moment from "moment";

const EventsChart = ({ events }) => {
  const data = events?.map(({ date, netValue }) => ({ date, net: netValue }));

  const sortedData = data.sort(function (a, b) {
    return new Date(a.date) - new Date(b.date);
  });

  const niceData = sortedData.map(({ date, net }) => ({
    date: moment(date).format("MMM Do"),
    net,
  }));

  const exampleData = [
    {net: 10,  date: moment("2021-01-01").format("MMM Do")},
    {net: 5,  date: moment("2021-01-02").format("MMM Do")},
    {net: 10,  date: moment("2021-01-03").format("MMM Do")},
    {net: 5,  date: moment("2021-01-04").format("MMM Do")},
    {net: 10,  date: moment("2021-01-05").format("MMM Do")},
  ];

  /*const min = data.reduce(
    (min, p) => (p.date < min ? p.date : min),
    data[0].date
  );
  const max = data.reduce(
    (max, p) => (p.date > max ? p.date : max),
    data[0].date
  );
  console.log("min", min);
  console.log("max", max);

  const formatXAxis = (tickItem) => {
    return moment(tickItem).format("MMM Do");
  };*/

  //TODO: Allow a user to create lines, track separate criterias and not just the net result

  return (
    <ResponsiveContainer width="100%" height={200}>
      <ComposedChart
        width={500}
        height={400}
        data={data.length ? niceData : exampleData}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="net" barSize={20} fill="#3C3939" />
        <Line type="monotone" dataKey="net" stroke="#ff7300" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

EventsChart.propTypes = {
  events: Proptypes.array,
};

export default EventsChart;
