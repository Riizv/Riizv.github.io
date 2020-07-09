import React, { useState, useEffect, memo } from "react";
import { useTheme, makeStyles } from "@material-ui/core/styles";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
} from "recharts";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
  },
}));

const Chart = ({ value, memory }) => {
  const theme = useTheme();
  const classes = useStyles();

  // useEffect(() => {
  // });

  return (
    <ResponsiveContainer>
      <LineChart data={memory} className={classes.root}>
        <XAxis dataKey="time" />
        <YAxis stroke={theme.palette.text.secondary}></YAxis>
        <Line type="monotone" dataKey="el" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default memo(Chart);
