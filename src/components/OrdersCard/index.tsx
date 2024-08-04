import React, { ReactNode } from "react";
import { Grid, Card, Typography } from "@mui/material";
import { SxProps } from "@mui/material";

export interface OrderCardProps {
  img: ReactNode;
  value: number;
  orderType: string;
  percentage: number;
  sx?: SxProps;
  symbol: ReactNode;
}

export const OrdersCard = (props: OrderCardProps) => {
  return (
    <Card sx={{ ...props.sx }}>
      <Grid
        container
        // bgcolor="red"
        spacing={2}
        display="flex"
        flexDirection="column"
      >
        <Grid
          item
          display="flex"
          justifyContent="center"
          height="80px"
          width="80px"
          bgcolor="blue"
          margin={2}
          borderRadius={1}
        >
          {props.img}
        </Grid>
        <Grid item>
          {" "}
          <Typography>{props.orderType}</Typography>
        </Grid>
        <Grid
          container
          // bgcolor="yellow"
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          paddingRight="10px"
        >
          <Grid item padding={2}>
            <Typography>{props.value}</Typography>
          </Grid>
          <Grid item>
            <Grid container padding={2}>
              <Grid item>{props.symbol}</Grid>
              <Grid item>
                <Typography>{props.percentage}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};
