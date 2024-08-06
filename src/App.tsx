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
import { OutlinedInput, Grid, Avatar, Hidden, IconButton } from "@mui/material";
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
import { SearchInput } from "./components/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import SettingsIcon from "@mui/icons-material/Settings";
import AiImg from "../src/assets/AiImg1.jpg";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import PaidIcon from "@mui/icons-material/Paid";

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

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  backgroundColor: "#1A2130", // Match the sidebar color
  boxShadow: "none", // Remove shadow
  borderBottom: "none", // Remove border if needed
  zIndex: theme.zIndex.drawer + 1, // Ensure it stays above the drawer
}));

const Drawer = styled(MuiDrawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...closedMixin(theme),
  "& .MuiDrawer-paper": closedMixin(theme),
}));

// side drawer for small and below screen

const PersistancedrawerWidth = 50; // Persistent drawer

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${PersistancedrawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps2 extends MuiAppBarProps {
  open?: boolean;
}

const AppBar2 = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps2>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader2 = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

function App() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // Function to toggle drawer
  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const drawerItems = [
    { text: "Home", icon: <HomeOutlinedIcon sx={{ paddingTop: "30px" }} /> },
    { text: "Reports", icon: <AssessmentOutlinedIcon /> },
    { text: "Notes", icon: <NoteAltOutlinedIcon /> },
    { text: "Wallet", icon: <AccountBalanceWalletOutlinedIcon /> },
    { text: "Shop", icon: <ShoppingBagOutlinedIcon /> },
    { text: "email", icon: <EmailOutlinedIcon /> },
    { text: "settings", icon: <SettingsIcon /> },
    {
      text: "notifications",
      icon: <FontAwesomeIcon icon={faBell} style={{ marginLeft: "5px" }} />,
    },
  ];

  return (
    <>
      <Hidden smDown>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <CssBaseline />
          <AppBar position="fixed" sx={{ bgcolor: "#1A2130" }}>
            <Toolbar>
              <Grid
                container
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                spacing={2}
              >
                <Grid item md={9}>
                  <Box display="flex" alignItems="center">
                    <FontAwesomeIcon
                      icon={faMicrosoft}
                      style={{ height: "30px", width: "30px" }}
                    />
                    <SearchInput inputWidth="200px" marginle="40px" />
                  </Box>
                </Grid>
                <Grid
                  item
                  md={2}
                  display="flex"
                  justifyContent="space-evenly"
                  alignItems="center"
                >
                  <Box
                    sx={{
                      height: "30px",
                      width: "30px",
                      borderRadius: "25px",
                      backgroundColor: "#C7C8CC",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <EmailOutlinedIcon />
                  </Box>
                  <Box
                    sx={{
                      height: "30px",
                      width: "30px",
                      borderRadius: "25px",
                      backgroundColor: "#C7C8CC",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <SettingsIcon />
                  </Box>
                  <Box
                    sx={{
                      height: "30px",
                      width: "30px",
                      borderRadius: "25px",
                      backgroundColor: "#C7C8CC",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FontAwesomeIcon icon={faBell} />
                  </Box>
                  <Avatar
                    src={AiImg}
                    alt={AiImg}
                    sx={{ height: "30px", width: "30px" }}
                  />

                  {/* </Box> */}
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            sx={{
              backgroundColor: "#1A2130",
              "&::-webkit-scrollbar": {
                // to disable scroll bar
                width: "0px",
              },
            }}
          >
            <DrawerHeader />
            <List sx={{ backgroundColor: "#1A2130", height: "100%" }}>
              {[
                "HomeOutlinedIcon",
                "AssessmentOutlinedIcon",
                "NoteAltOutlinedIcon",
                "AccountBalanceWalletOutlinedIcon",
                "ShoppingBagOutlinedIcon",
              ].map((text, index) => (
                <ListItem key={text} disablePadding sx={{ display: "block" }}>
                  <ListItemButton
                    selected={selectedIndex === index}
                    onClick={() => setSelectedIndex(index)}
                    disableRipple
                    sx={{
                      minHeight: 48,
                      justifyContent: "center",
                      px: 2.5,

                      bgcolor: selectedIndex === index ? "transparent" : "", // Highlight the selected item
                      // color: selectedIndex === index ? "#1A2130" : "#ffffff", // Change color of icon when selected
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        justifyContent: "center",
                      }}
                    >
                      {index === 0 && (
                        // <HomeOutlinedIcon style={{ color: "#fffff" }} />
                        <FontAwesomeIcon
                          icon={faHouse}
                          style={{
                            color:
                              selectedIndex === index ? "#83A2FF" : "#ffffff",
                          }}
                        />
                      )}
                      {index === 1 && (
                        <AssessmentOutlinedIcon
                          style={{
                            color:
                              selectedIndex === index ? "#83A2FF" : "#ffffff",
                          }}
                        />
                      )}
                      {index === 2 && (
                        <NoteAltOutlinedIcon
                          style={{
                            color:
                              selectedIndex === index ? "#83A2FF" : "#ffffff",
                          }}
                        />
                      )}
                      {index === 3 && (
                        <AccountBalanceWalletOutlinedIcon
                          style={{
                            color:
                              selectedIndex === index ? "#83A2FF" : "#ffffff",
                          }}
                        />
                      )}
                      {index === 4 && (
                        <ShoppingBagOutlinedIcon
                          style={{
                            color:
                              selectedIndex === index ? "#83A2FF" : "#ffffff",
                          }}
                        />
                      )}
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
            sx={{
              flexGrow: 1,
              p: 3,
              backgroundColor: "#000000",
              height: "100%",
              borderTopRightRadius: "20px",
              "&::-webkit-scrollbar": {
                // to disable scroll bar
                width: "0px",
              },
            }}
          >
            <DrawerHeader />
            <Grid>
              <Typography fontSize={20} color="#ffffff">
                DashBoard
              </Typography>
            </Grid>

            <Grid container spacing={2}>
              {/* Order Cards */}
              <Grid item xs={12} md={8}>
                <Grid container spacing={2}>
                  <Grid item xs={6} md={3}>
                    <OrdersCard
                      img={
                        <ShoppingBasketIcon
                          sx={{ color: "#ffffff", fontSize: "38px" }}
                        />
                      }
                      noOfOrders={75}
                      orderType="Total orders"
                      percentage={3}
                      percentageColor="#4caf50"
                      percentageIcon={
                        <ArrowDropUpIcon style={{ color: "#4caf50" }} />
                      }
                      imgBg="#4158A6"
                    />
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <OrdersCard
                      img={
                        <ShoppingBagIcon
                          sx={{ color: "#ffffff", fontSize: "40px" }}
                        />
                      }
                      noOfOrders={70}
                      orderType="Total Delivered"
                      percentage={3}
                      percentageColor="#f44336"
                      percentageIcon={
                        <ArrowDropDownIcon style={{ color: "#f44336" }} />
                      }
                      imgBg="#387F39"
                    />
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <OrdersCard
                      img={
                        <ShoppingBagIcon
                          sx={{ color: "#ffffff", fontSize: "40px" }}
                        />
                      }
                      noOfOrders={"05"}
                      orderType="Total Cancelled"
                      percentage={3}
                      percentageColor="#4caf50"
                      percentageIcon={
                        <ArrowDropUpIcon style={{ color: "#4caf50" }} />
                      }
                      imgBg="#EF5A6F"
                    />
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <OrdersCard
                      img={
                        <PaidIcon sx={{ color: "#ffffff", fontSize: "40px" }} />
                      }
                      specialChar="$"
                      noOfOrders={12}
                      orderType="Total Revenue"
                      percentage={3}
                      percentageColor="#f44336"
                      percentageIcon={
                        <ArrowDropDownIcon style={{ color: "#f44336" }} />
                      }
                      imgBg="#DA7297"
                    />
                  </Grid>
                </Grid>
              </Grid>
              {/* Profit Card */}
              <Grid item xs={12} sm={6} md={4}>
                <ProfitCard
                  amount={634520}
                  progressPercent={70}
                  levelPercent={3}
                />
              </Grid>
            </Grid>

            <Grid container spacing={2} marginTop="10px">
              <Grid item md={8} sm={12} xs={12}>
                <BarChartCard height={180} />
              </Grid>
              <Grid item md={4} sm={12}>
                <Box
                  bgcolor="#1A2130"
                  borderRadius="5px"

                  // padding="20px"
                  // display="flex"
                  // flexDirection="column"
                  // justifyContent="space-evenly"
                >
                  <MenuCard
                    img={
                      <LunchDiningOutlinedIcon
                        style={{
                          height: "15px",
                          width: "15px",
                          color: "#D04848",
                        }}
                      />
                    }
                    name="Goals"
                    backgroundClr="#FCAEAE"
                  />
                  <MenuCard
                    img={
                      <LunchDiningOutlinedIcon
                        style={{
                          height: "15px",
                          width: "15px",
                          color: "7EA1C3",
                        }}
                      />
                    }
                    name="Goals"
                    backgroundClr="#4158A6"
                  />
                  <MenuCard
                    img={
                      <LunchDiningOutlinedIcon
                        style={{
                          height: "15px",
                          width: "15px",
                          color: "#03346E",
                        }}
                      />
                    }
                    name="Goals"
                    backgroundClr="#179BAE"
                  />
                </Box>
              </Grid>
            </Grid>

            <Grid container spacing={2} marginTop="10px">
              <Grid item md={8}>
                <RecentOrderTable />
              </Grid>
              <Grid item md={4}>
                <Box
                  height="460px"
                  sx={{
                    overflowY: "auto",
                    backgroundColor: "#1A2130",
                    borderRadius: "5px",
                    padding: "10px",
                    // "&::-webkit-scrollbar": { // to disable scroll bar
                    //   width: "0px",
                    // },

                    /* Custom Scrollbar */
                    scrollbarWidth: "thin", // Firefox
                    scrollbarColor: "#888 #1A2130", // Thumb and track color for Firefox
                    "&::-webkit-scrollbar": {
                      width: "8px", // Width of the scrollbar
                    },
                    "&::-webkit-scrollbar-track": {
                      background: "#1A2130", // Background color of the track
                      borderRadius: "10px", // Rounded corners for track
                    },
                    "&::-webkit-scrollbar-thumb": {
                      backgroundColor: "#888", // Color of the scrollbar thumb
                      borderRadius: "10px", // Rounded corners for thumb
                      border: "2px solid #1A2130", // Padding around thumb
                    },
                    "&::-webkit-scrollbar-thumb:hover": {
                      backgroundColor: "#555", // Color on hover
                    },
                  }}
                >
                  <CustomerFeedBackCard />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Hidden>

      <Hidden mdUp>
        <Box>
          <CssBaseline />

          <AppBar
            position="fixed"
            sx={{
              zIndex: (theme) => theme.zIndex.drawer + 1,
              bgcolor: "#1A2130",
              padding: "6px",
            }}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={toggleDrawer(true)} // Open drawer on click
              >
                <MenuIcon />
              </IconButton>
              <Box
                width="100%"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <SearchInput marginle="20px" inputWidth="150px" />
                <Avatar
                  src={AiImg}
                  alt={AiImg}
                  sx={{ height: "40px", width: "40px" }}
                />
              </Box>
            </Toolbar>
          </AppBar>

          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={toggleDrawer(false)} // Close drawer on outside click
            sx={{
              "& .MuiDrawer-paper": {
                backgroundColor: "#1A2130", // Drawer background color
                width: drawerWidth, // Drawer width
              },
            }}
          >
            <Box
              role="presentation"
              onClick={toggleDrawer(false)} // Close drawer on item click
              onKeyDown={toggleDrawer(false)}
            >
              <List>
                {drawerItems.map((item, index) => (
                  <ListItem key={item.text} disablePadding>
                    <ListItemButton>
                      <ListItemIcon
                        sx={{
                          color:
                            selectedIndex === index ? "#83A2FF" : "#ffffff",
                        }}
                      >
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={item.text}
                        sx={{ color: "#ffffff" }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>

          <Grid
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              backgroundColor: "#000000",
              height: "100%",
              backgroundSize: "cover",
              "&::-webkit-scrollbar": {
                // to disable scroll bar
                width: "0px",
              },
              alignContent: "center",
            }}
          >
            <DrawerHeader />
            <Grid>
              <Typography fontSize={20} color="#ffffff">
                DashBoard
              </Typography>
            </Grid>

            <Grid container spacing={2}>
              {/* Order Cards */}
              <Grid item xs={12} md={8}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={3}>
                    <OrdersCard
                      img={
                        <ShoppingBagIcon
                          sx={{ color: "#ffffff", fontSize: "38px" }}
                        />
                      }
                      noOfOrders={75}
                      orderType="Total orders"
                      percentage={3}
                      percentageColor="#4caf50"
                      percentageIcon={
                        <ArrowDropUpIcon style={{ color: "#4caf50" }} />
                      }
                      imgBg="#4158A6"
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <OrdersCard
                      img={
                        <ShoppingBagIcon
                          sx={{ color: "#ffffff", fontSize: "40px" }}
                        />
                      }
                      noOfOrders={70}
                      orderType="Total Delivered"
                      percentage={3}
                      percentageColor="#f44336"
                      percentageIcon={
                        <ArrowDropDownIcon style={{ color: "#f44336" }} />
                      }
                      imgBg="#387F39"
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <OrdersCard
                      img={
                        <ShoppingBagIcon
                          sx={{ color: "#ffffff", fontSize: "40px" }}
                        />
                      }
                      noOfOrders="05"
                      orderType="Total Cancelled"
                      percentage={3}
                      percentageColor="#4caf50"
                      percentageIcon={
                        <ArrowDropUpIcon style={{ color: "#4caf50" }} />
                      }
                      imgBg="#EF5A6F"
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <OrdersCard
                      img={
                        <ShoppingBagIcon
                          sx={{ color: "#ffffff", fontSize: "40px" }}
                        />
                      }
                      specialChar="$"
                      noOfOrders={12}
                      orderType="Total Revenue"
                      percentage={3}
                      percentageColor="#f44336"
                      percentageIcon={
                        <ArrowDropDownIcon style={{ color: "#f44336" }} />
                      }
                      imgBg="#DA7297"
                    />
                  </Grid>
                </Grid>
              </Grid>
              {/* Profit Card */}
              <Grid item xs={12} sm={6} md={4}>
                <ProfitCard
                  amount={634520}
                  progressPercent={70}
                  levelPercent={3}
                />
              </Grid>
            </Grid>

            <Grid container spacing={2} marginTop="10px">
              <Grid item md={8} sm={12}>
                <BarChartCard height={250} />
              </Grid>
              <Grid item md={4} xs={12} sm={12}>
                <Box bgcolor="#1A2130" borderRadius="5px" width="100%">
                  <MenuCard
                    img={
                      <LunchDiningOutlinedIcon
                        style={{
                          height: "15px",
                          width: "15px",
                          color: "#D04848",
                        }}
                      />
                    }
                    name="Goals"
                    backgroundClr="#FCAEAE"
                  />
                  <MenuCard
                    img={
                      <LunchDiningOutlinedIcon
                        style={{
                          height: "15px",
                          width: "15px",
                          color: "7EA1C3",
                        }}
                      />
                    }
                    name="Goals"
                    backgroundClr="#4158A6"
                  />
                  <MenuCard
                    img={
                      <LunchDiningOutlinedIcon
                        style={{
                          height: "15px",
                          width: "15px",
                          color: "#03346E",
                        }}
                      />
                    }
                    name="Goals"
                    backgroundClr="#179BAE"
                  />
                </Box>
              </Grid>
            </Grid>

            <Grid container spacing={2} marginTop="10px">
              <Grid item md={8} sx={{ overflow: "auto" }}>
                <Box>
                  <RecentOrderTable />
                </Box>
              </Grid>
              <Grid item md={4}>
                <Box
                  height="460px"
                  sx={{
                    overflowY: "auto",
                    backgroundColor: "#1A2130",
                    borderRadius: "5px",
                    padding: "10px",
                    // "&::-webkit-scrollbar": { // to disable scroll bar
                    //   width: "0px",
                    // },

                    /* Custom Scrollbar */
                    scrollbarWidth: "thin", // Firefox
                    scrollbarColor: "#888 #1A2130", // Thumb and track color for Firefox
                    "&::-webkit-scrollbar": {
                      width: "8px", // Width of the scrollbar
                    },
                    "&::-webkit-scrollbar-track": {
                      background: "#1A2130", // Background color of the track
                      borderRadius: "10px", // Rounded corners for track
                    },
                    "&::-webkit-scrollbar-thumb": {
                      backgroundColor: "#888", // Color of the scrollbar thumb
                      borderRadius: "10px", // Rounded corners for thumb
                      border: "2px solid #1A2130", // Padding around thumb
                    },
                    "&::-webkit-scrollbar-thumb:hover": {
                      backgroundColor: "#555", // Color on hover
                    },
                  }}
                >
                  <CustomerFeedBackCard />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Hidden>
    </>
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
