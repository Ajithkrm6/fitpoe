import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
// menu icons
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// burger
import LunchDiningOutlinedIcon from "@mui/icons-material/LunchDiningOutlined";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
// side arrow
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";
import { OutlinedInput, Grid } from "@mui/material";
import { OrdersCard } from "./components/OrdersCard";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { ProfitCard } from "./components/ProfitCard";
import { BarChartCard } from "./components/BarChatCard";

const drawerWidth = 72; // Mini drawer width

const closedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {}

const AppBar = styled(MuiAppBar)<AppBarProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

const Drawer = styled(MuiDrawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...closedMixin(theme),
  "& .MuiDrawer-paper": closedMixin(theme),
}));

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ bgcolor: "#222831" }}>
        <Toolbar>
          <Grid
            container
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            spacing={2}
          >
            <Grid item md={6}>
              <ShoppingBagOutlinedIcon />
              <OutlinedInput />
            </Grid>
            <Grid
              item
              md={6}
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
            >
              <EmailOutlinedIcon />
              <EmailOutlinedIcon />
              <EmailOutlinedIcon />
            </Grid>
          </Grid>

          {/* <Typography variant="h6" noWrap component="div">
            Mini variant drawer
          </Typography> */}
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" sx={{ bgcolor: "#222831" }}>
        <DrawerHeader />
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    justifyContent: "center",
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    justifyContent: "center",
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography fontSize={20}>DashBoard</Typography>
        <ProfitCard amount={634520} progressPercent={70} levelPercent={3} />
        <BarChartCard />
      </Box>
    </Box>
  );
}

export default App;
