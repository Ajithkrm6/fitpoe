import React, { ReactNode } from "react";
import { Box, Grid, SxProps, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export interface MenuCardProps {
  img: ReactNode;
  name: string;
  sx?: SxProps;
  backgroundClr?: string;
}

export const MenuCard = (props: MenuCardProps) => {
  return (
    <Grid
      container
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      maxWidth="300px"
    >
      <Grid item display="flex" alignItems="center">
        <Box
          height="50px"
          width="50px"
          borderRadius="30px"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          bgcolor={props.backgroundClr}
          display="flex"
        >
          {props.img}
        </Box>
        <Typography color="#ffffff" marginLeft="20px">
          {props.name}
        </Typography>
      </Grid>
      <Grid item>
        <Box
          height="20px"
          width="20px"
          borderRadius="20px"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          bgcolor="#C7C8CC"
          display="flex"
        >
          <KeyboardArrowRightIcon style={{ height: "15px", width: "15px" }} />
        </Box>
      </Grid>
    </Grid>
  );
};
