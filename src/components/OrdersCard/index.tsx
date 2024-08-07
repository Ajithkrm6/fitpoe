import React, { ReactNode } from "react";
import { Grid, Card, Typography, Box } from "@mui/material";
import { SxProps } from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
export interface OrderCardProps {
  img: ReactNode;
  noOfOrders: number | string;
  orderType: string;
  percentage: number;
  sx?: SxProps;
  symbol?: ReactNode;
  md?: number;
  sm?: number;
  lg?: number;
  percentageColor?: string;
  percentageIcon?: ReactNode;
  imgBg?: string;
  specialChar?: string;
}
export const OrdersCard = (props: OrderCardProps) => {
  return (
    <Grid
      container
      bgcolor="#1A2130"
      display="flex"
      flexDirection="column"
      maxWidth="auto"
      padding={2}
      borderRadius="5px"
      md={props.md}
      sm={props.sm}
      lg={props.lg}
    >
      <Grid item>
        <Box
          height="40px"
          width="40px"
          borderRadius="8px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          bgcolor={props.imgBg}
        >
          {props.img}
        </Box>
        <Typography fontSize="12px" paddingTop="10px" color="#ffffff">
          {props.orderType}
        </Typography>
      </Grid>
      <Grid
        item
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
      >
        <Grid container display="flex" justifyContent="space-between">
          <Grid item>
            <Typography color="#ffffff" fontSize="25px" fontWeight="bold">
              {props.specialChar}
              {props.noOfOrders}
            </Typography>
          </Grid>
          <Grid
            item
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="row"
          >
            <>{props.percentageIcon}</>
            <Typography fontSize="12px" color={props.percentageColor}>
              {props.percentage}%
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
