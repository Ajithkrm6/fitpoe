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
import { MenuCard } from "./components/MenuCard";
import burger from "../src/assets/burger.png";
import { RecentOrderTable } from "./components/Recent Orders Table";
import { CustomerFeedBackCard } from "./components/CustomerFeedbackCard";

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
      <Grid
        component="main"
        // card bg - #021526 - 1
        // card bg actual - #1A2130
        sx={{ flexGrow: 1, p: 3, backgroundColor: "#000000", height: "auto" }}
      >
        <DrawerHeader />
        <Typography fontSize={20} color="#ffffff">
          DashBoard
        </Typography>
      </Grid>
    </Box>
  );
}

export default App;

{
  /* <ProfitCard amount={634520} progressPercent={70} levelPercent={3} />
<BarChartCard />
<OrdersCard
  img={<ShoppingBagIcon sx={{ color: "#ffffff", fontSize: "40px" }} />}
  noOfOrders={75}
  orderType="Total orders"
  percentage={3}
  percentageColor="#4caf50"
  percentageIcon={<ArrowDropUpIcon style={{ color: "#4caf50" }} />}
/>

<Grid bgcolor="#1A2130">
  <MenuCard
    img={
      <LunchDiningOutlinedIcon
        style={{ height: "15px", width: "15px", color: "#D04848" }}
      />
    }
    name="Goals"
    backgroundClr="#FCAEAE"
  />
  <MenuCard
    img={
      <LunchDiningOutlinedIcon
        style={{ height: "15px", width: "15px", color: "7EA1C3" }}
      />
    }
    name="Goals"
    backgroundClr="#4158A6"
  />
  <MenuCard
    img={
      <LunchDiningOutlinedIcon
        style={{ height: "15px", width: "15px", color: "#03346E" }}
      />
    }
    name="Goals"
    backgroundClr="#179BAE"
  />
</Grid>

<RecentOrderTable />
<CustomerFeedBackCard /> */
}
