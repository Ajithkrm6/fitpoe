import React from "react";
import { Grid, Typography, Box, Select, MenuItem } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "5", uv: 2000, pv: 2500 },
  { name: "19", uv: 6000, pv: 3500 },
  { name: "11", uv: 3000, pv: 4000 },
  { name: "13", uv: 1000, pv: 1000 },
  { name: "15", uv: 7000, pv: 1500 },
  { name: "17", uv: 9000, pv: 2000 },
  { name: "19", uv: 11000, pv: 3500 },
  { name: "21", uv: 13000, pv: 4500 },
  { name: "23", uv: 15000, pv: 5000 },
];

export const BarChartCard = () => {
  return (
    <Grid container bgcolor="#4B4F5D" borderRadius="10px">
      <Grid
        item
        md={12}
        sm={12}
        sx={{
          borderRadius: 2,
          p: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: "20px",
        }}
      >
        <Typography color="#ffffff" variant="h6">
          Activity
        </Typography>
        <Select
          value="weekly"
          sx={{
            minWidth: 120,
            borderRadius: "20px",
            borderWidth: "1px",
            borderColor: "#ffffff",
            height: "40px",
            color: "#ffffff",
            backgroundColor: "#4B4F5D",
          }}
        >
          <MenuItem color="#ffffff" value="weekly">
            Weekly
          </MenuItem>
          <MenuItem color="#ffffff" value="monthly">
            Monthly
          </MenuItem>
          <MenuItem color="#ffffff" value="yearly">
            Yearly
          </MenuItem>
        </Select>
      </Grid>
      <Grid item md={12}>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
            barCategoryGap="10%" // Adjust space between categories
            barGap={4} // Adjust space between bars within a category
          >
            <CartesianGrid stroke="#8884d8" vertical={false} />
            <XAxis dataKey="name" tick={{ fill: "#ffffff" }} />
            <YAxis
              domain={[0, 5000, 10000, 15000]}
              tickFormatter={(value) => `${value / 1000}k`}
              // axisLine={{ stroke: "#8884d8", strokeWidth: 1 }}
              axisLine={false}
              tick={{ fill: "#ffffff" }}
            />
            {/* <Tooltip formatter={(value) => `${value.toLocaleString()} units`} /> */}

            {/* <Legend /> */}
            <Bar
              dataKey="uv"
              fill="#83A2FF"
              barSize={30}
              radius={[13, 13, 13, 13]}
            />
            <Bar
              dataKey="pv"
              fill="#83A2FF"
              barSize={30}
              radius={[13, 13, 13, 13]}
            />
          </BarChart>
        </ResponsiveContainer>
      </Grid>
    </Grid>
  );
};
