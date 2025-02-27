import React from "react";
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Typography,
  Box,
  Chip,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import AiImg1 from "../../assets/AiImg1.jpg";
import AiImg2 from "../../assets/AiImg2.jpg";
import AiImg3 from "../../assets/AiImg3.jpeg";

export const RecentOrderTable = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const data = [
    {
      id: 1,
      customer: "John Doe",
      image: AiImg1,
      orderNo: "1214578",
      amount: "$250",
      status: "Delivered",
    },
    {
      id: 2,
      customer: "Jane Smith",
      image: AiImg2,
      orderNo: "12365478",
      amount: "$150",
      status: "Delivered",
    },
    {
      id: 3,
      customer: "Alise Kikeee",
      image: AiImg3,
      orderNo: "12548736",
      amount: "$300",
      status: "Cancelled",
    },
    {
      id: 4,
      customer: "Michael Brown",
      image: AiImg1,
      orderNo: "12487563",
      amount: "$200",
      status: "Cancelled",
    },
    {
      id: 5,
      customer: "Rubeena",
      image: AiImg3,
      orderNo: "1258268",
      amount: "$200",
      status: "Delivered",
    },
    {
      id: 6,
      customer: "Michael Brown",
      image: AiImg2,
      orderNo: "12354878",
      amount: "$200",
      status: "Delivered",
    },
    {
      id: 7,
      customer: "Michael Brown",
      image: AiImg1,
      orderNo: "12659874",
      amount: "$200",
      status: "Cancelled",
    },
  ];

  return (
    <Grid item width="100%">
      <TableContainer
        component={Paper}
        elevation={3}
        sx={{
          padding: "10px",
          backgroundColor: "#1A2130",
          width: "100%",
        }}
      >
        <Typography color="#ffffff">Recent Orders</Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  color: "#ffffff",
                  fontSize: isSmallScreen ? "12px" : "16px",
                  padding: isSmallScreen ? "0px" : "",
                }}
              >
                Customers
              </TableCell>
              <TableCell
                sx={{
                  color: "#ffffff",
                  fontSize: isSmallScreen ? "12px" : "16px",
                  padding: isSmallScreen ? "0px" : "",
                }}
              >
                Order No.
              </TableCell>
              <TableCell
                sx={{
                  color: "#ffffff",
                  fontSize: isSmallScreen ? "12px" : "16px",
                  paddingLeft: isSmallScreen ? "2px" : "",
                }}
              >
                Amount
              </TableCell>
              <TableCell
                sx={{
                  color: "#ffffff",
                  fontSize: isSmallScreen ? "12px" : "16px",
                }}
              >
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow
                key={item.id}
                sx={{
                  borderColor: "grey",
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell
                  sx={{
                    padding: isSmallScreen ? "4px" : "8px",
                    color: "#ffffff",
                  }}
                >
                  <Box display="flex" alignItems="center">
                    <Avatar
                      src={item.image}
                      sx={{
                        marginRight: isSmallScreen ? 0.5 : 1,
                        height: isSmallScreen ? "20px" : "35px",
                        width: isSmallScreen ? "20px" : "35px",
                        borderRadius: "30px",
                      }}
                    />
                    <Typography fontSize={isSmallScreen ? "12px" : "14px"}>
                      {item.customer}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell
                  sx={{
                    padding: isSmallScreen ? "4px" : "8px",
                    paddingLeft: isSmallScreen ? "8px" : "15px",
                    color: "#ffffff",
                  }}
                >
                  <Typography fontSize={isSmallScreen ? "12px" : "14px"}>
                    {item.orderNo}
                  </Typography>
                </TableCell>
                <TableCell
                  sx={{
                    padding: isSmallScreen ? "4px" : "8px",
                    paddingLeft: isSmallScreen ? "8px" : "20px",
                    color: "#ffffff",
                  }}
                >
                  <Typography fontSize={isSmallScreen ? "12px" : "14px"}>
                    {item.amount}
                  </Typography>
                </TableCell>
                <TableCell
                  sx={{
                    padding: isSmallScreen ? "4px" : "8px",
                    color: "#ffffff",
                  }}
                >
                  <Chip
                    label={item.status}
                    color={
                      item.status === "Delivered"
                        ? "success"
                        : item.status === "Cancelled"
                        ? "error"
                        : "default"
                    }
                    size={isSmallScreen ? "small" : "medium"}
                  ></Chip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};
