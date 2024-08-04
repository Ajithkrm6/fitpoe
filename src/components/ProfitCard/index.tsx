// import React from "react";
// import { Grid, Card, Typography } from "@mui/material";
// import { Line, Circle } from "rc-progress";

// export interface ProfitCardProps {
//   amount: number;
//   percent?: number;
// }

// export const ProfitCard = (props: ProfitCardProps) => {
//   const textContainerStyle = {
//     position: "absolute" as const,
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     width: "100%",
//     height: "100%",
//   };
//   return (
//     <Grid>
//       <Typography>Net Profit</Typography>
//       <Grid container spacing={2}>
//         <Grid item>
//           <Typography>{props.amount}</Typography>
//         </Grid>
//         <Grid item>
//           <Grid height="100px" width="100px">
//             <Circle
//               percent={props.percent}
//               strokeColor="lightblue"
//               strokeWidth={4}
//               trailWidth={4}
//               trailColor="yellows"
//               strokeLinecap="square"
//             />
//           </Grid>
//           <Grid style={textContainerStyle}>
//             <Typography>{props.percent}</Typography>
//             <Typography fontSize={6}>Goal</Typography>
//             <Typography fontSize={6}>completed</Typography>
//           </Grid>
//         </Grid>
//       </Grid>
//     </Grid>
//   );
// };

import React from "react";
import { Grid, Card, Typography, Box, CardContent } from "@mui/material";
import { Circle } from "rc-progress";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

export interface ProfitCardProps {
  amount: number;
  progressPercent?: number;
  levelPercent?: number;
}

export const ProfitCard = (props: ProfitCardProps) => {
  return (
    <Grid style={cardStyle}>
      {/* <CardContent> */}
      <Grid>
        <Typography textAlign="start" style={titleStyle}>
          Net Profit
        </Typography>
      </Grid>

      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        display="flex"
      >
        <Grid item>
          <Typography variant="h4" textAlign="start" style={amountStyle}>
            ${props.amount.toLocaleString()}
          </Typography>
        </Grid>
        <Grid item>
          <Box style={circleContainerStyle}>
            <Circle
              percent={props.progressPercent || 0}
              strokeColor="lightblue"
              strokeWidth={8}
              trailWidth={8}
              trailColor="#f0f0f0"
              strokeLinecap="round"
              style={circleStyle}
            />
            <Box style={textContainerStyle}>
              <Box>
                <Typography variant="subtitle1" style={textStyle}>
                  {props.progressPercent ? `${props.progressPercent}%` : "0%"}
                </Typography>
                <Typography fontSize="7px">{`Goal \n completed`}</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        display="flex"
        flexDirection={"row"}
        justifyContent="space-between"
      >
        <Grid item>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
          >
            <ArrowDropUpIcon style={{ color: "#4caf50" }} />
            <Typography
              fontSize="8px"
              justifyContent="center"
              alignItems="center"
              color="#4caf50"
            >
              {props.levelPercent}
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Typography fontSize="6px" color="#ffffff">
            *This values here has been updated.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

// CSS styles
const cardStyle = {
  padding: "10px",
  borderRadius: "10px",
  // boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  backgroundColor: "#40534C",
  maxWidth: "300px",
  textAlign: "center" as const,
};

const titleStyle = {
  fontSize: "12px",
  color: "#ffffff",
};

const amountStyle = {
  fontWeight: "bold",
  color: "#ffffff",
};

const circleContainerStyle = {
  position: "relative" as const,
  display: "inline-block",
  width: "80px",
  height: "80px",
};

const circleStyle = {
  position: "absolute" as const,
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
};

const textContainerStyle = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
};

const textStyle = {
  fontSize: "18px",
  fontWeight: "bold",
  color: "#333",
};

export default ProfitCard;
