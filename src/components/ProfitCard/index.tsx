import React from "react";
import { Grid, Card, Typography, Box, CardContent } from "@mui/material";
import { Circle } from "rc-progress";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

export interface ProfitCardProps {
  amount: number;
  progressPercent?: number;
  levelPercent?: number;
  md?: number;
  sm?: number;
}

export const ProfitCard = (props: ProfitCardProps) => {
  return (
    <Grid md={props.md} sm={props.sm} style={cardStyle}>
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
          <Typography variant="h5" textAlign="start" style={amountStyle}>
            ${props.amount.toLocaleString()}
          </Typography>
        </Grid>
        <Grid item>
          <Box style={circleContainerStyle}>
            <Circle
              percent={props.progressPercent || 0}
              strokeColor="#83A2FF"
              strokeWidth={8}
              trailWidth={8}
              trailColor="#536493"
              strokeLinecap="round"
              style={circleStyle}
            />
            <Box style={textContainerStyle}>
              <Box>
                <Typography
                  variant="subtitle1"
                  color="#ffffff"
                  fontSize="15px"
                  fontWeight="bold"
                >
                  {props.progressPercent ? `${props.progressPercent}%` : "0%"}
                </Typography>
                <Typography
                  color="#ffffff"
                  fontSize="6px"
                >{`Goal \n completed`}</Typography>
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
              fontSize="12px"
              justifyContent="center"
              alignItems="center"
              color="#4caf50"
            >
              {props.levelPercent}%
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          justifyContent="center"
          alignContent="center"
          alignItems="center"
        >
          <Typography fontSize="10px" color="#ffffff">
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
  borderRadius: "5px",
  backgroundColor: "#1A2130",
  // minWidth: "auto",
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
  width: "70px",
  height: "70px",
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
