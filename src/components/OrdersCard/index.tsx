import React, { ReactNode } from "react";
import { Grid, Card, Typography, Box } from "@mui/material";
import { SxProps } from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export interface OrderCardProps {
  img: ReactNode;
  noOfOrders: number;
  orderType: string;
  percentage: number;
  sx?: SxProps;
  symbol?: ReactNode;
  md?: number;
  sm?: number;
  lg?: number;
  percentageColor?: string;
  percentageIcon?: ReactNode;
}

export const OrdersCard = (props: OrderCardProps) => {
  return (
    <Grid
      container
      bgcolor="#4B4F5D"
      display="flex"
      flexDirection="column"
      padding={2}
      maxWidth="200px"
      borderRadius="10px"
      md={props.md}
      sm={props.sm}
      lg={props.lg}
    >
      <Grid item md={12}>
        <Box>{props.img}</Box>
        <Typography color="#ffffff">{props.orderType}</Typography>
      </Grid>
      <Grid
        item
        md={12}
        sm={12}
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
      >
        <Grid container display="flex" justifyContent="space-between">
          <Grid item>
            <Typography color="#ffffff" fontSize="16px" fontWeight="bold">
              {props.noOfOrders}
            </Typography>
          </Grid>
          <Grid item display="flex" flexDirection="row">
            <>{props.percentageIcon}</>
            <Typography color={props.percentageColor}>
              {props.percentage}%
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
