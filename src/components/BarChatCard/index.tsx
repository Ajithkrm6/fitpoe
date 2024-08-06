import React, { useState } from "react";
import {
  Grid,
  Typography,
  Box,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
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

export interface BarCHartCardProps {
  height?: string | number;
}

const data = [
  { name: "5", uv: 9000, pv: 10000 },
  { name: "19", uv: 8000, pv: 5500 },
  { name: "11", uv: 3000, pv: 4000 },
  { name: "13", uv: 2800, pv: 2500 },
  { name: "15", uv: 7000, pv: 2900 },
  { name: "17", uv: 9000, pv: 2000 },
  { name: "19", uv: 11000, pv: 3500 },
  { name: "21", uv: 13000, pv: 4500 },
  { name: "23", uv: 15000, pv: 8000 },
];

export const BarChartCard = (props: BarCHartCardProps) => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("weekly");
  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedTimeframe(event.target.value as string);
  };
  return (
    <Grid container bgcolor="#1A2130" borderRadius="5px" xs={12}>
      <Grid
        item
        width="100%"
        // md={12}
        // sm={12}
        sx={{
          borderRadius: 2,
          p: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: "20px",
        }}
      >
        <Typography color="#ffffff">Activity</Typography>
        <Select
          value={selectedTimeframe}
          onChange={handleChange}
          sx={{
            minWidth: 70,
            borderRadius: "20px",
            borderWidth: "1px",
            borderColor: "#ffffff",
            height: "25px",
            color: "#ffffff",
            backgroundColor: "#4B4F5D",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#ffffff", // Border color when not focused
              },
              "&:hover fieldset": {
                borderColor: "#ffffff", // Border color on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "none", // Remove border color when focused
              },
            },
          }}
        >
          <MenuItem color="#ffffff" value="weekly">
            <Typography
              textAlign="center"
              alignItems="center"
              justifyContent="center"
              alignSelf="center"
              fontSize="14px"
            >
              {" "}
              Weekly
            </Typography>
          </MenuItem>
          <MenuItem color="#ffffff" value="monthly">
            <Typography fontSize="14px"> Monthly</Typography>
          </MenuItem>
          <MenuItem color="#ffffff" value="yearly">
            <Typography fontSize="14px"> Yearly</Typography>
          </MenuItem>
        </Select>
      </Grid>
      <Grid item md={12} xs={12} sm={12}>
        <ResponsiveContainer width="100%" height={props.height}>
          <BarChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
            barCategoryGap="10%" // Adjust space between categories
            barGap={7} // Adjust space between bars within a category
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
