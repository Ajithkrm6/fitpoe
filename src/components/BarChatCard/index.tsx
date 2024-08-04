import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export const BarChartCard = () => {
  const data = [
    {
      name: "0",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "5K",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "10k",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "15k",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
  ];
  return (
    <Grid container>
      <Grid item>
        <Box>
          <BarChart
            width={600}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid
              vertical={true}
              horizontal={false}
              strokeDasharray="3 3"
              verticalFill={["#f5f5f5", "#fff"]}
            />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" radius={[10, 10, 10, 10]} />
            <Bar dataKey="uv" fill="#82ca9d" radius={[10, 10, 10, 10]} />
          </BarChart>
        </Box>
      </Grid>
    </Grid>
  );
};
