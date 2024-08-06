import React, { ReactNode } from "react";
import {
  Box,
  Grid,
  SxProps,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import LunchDiningOutlinedIcon from "@mui/icons-material/LunchDiningOutlined"; // Importing for demonstration
// MenuCardProps Interface
export interface MenuCardProps {
  img: ReactNode;
  name: string;
  sx?: SxProps;
  backgroundClr?: string;
}
// MenuCard Component
export const MenuCard = (props: MenuCardProps) => {
  return (
    <Grid
      container
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        minWidth: 200,
        borderRadius: 1,
        padding: 2,
        transition: "transform 0.2s",
        "&:hover": {
          transform: "scale(1.02)", // Slight scale effect on hover for better UX
        },
      }}
    >
      <Grid item display="flex" alignItems="center">
        <Box
          height={50}
          width={50}
          borderRadius="30px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          bgcolor={props.backgroundClr}
        >
          {props.img}
        </Box>
        <Typography color="#ffffff" marginLeft={2}>
          {props.name}
        </Typography>
      </Grid>
      <Grid item>
        <Box
          height={30}
          width={30}
          borderRadius="15px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          bgcolor="#C7C8CC"
        >
          <KeyboardArrowRightIcon
            sx={{ height: 20, width: 20, color: "#1A2130" }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};
