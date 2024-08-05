import React from "react";
import AiImg1 from "../../assets/AiImg1.jpg";
import AiImg2 from "../../assets/AiImg2.jpg";
import AiImg3 from "../../assets/AiImg3.jpeg";
import { Typography, Grid, Box, Avatar, Divider } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";

export const CustomerFeedBackCard = () => {
  const data = [
    {
      id: 1,
      name: "Tim David",
      image: AiImg1,
      rating: "5",
      comment:
        "The Food was excellent and so as the service.I had mashroom risecottoe with scallians which was awsome. I had a burger with greens (gluten-free) which was also very good. They were very causious about guten allergies",
    },
    {
      id: 2,
      name: "Jordan Meckey",
      image: AiImg2,
      rating: "4",
      comment:
        "We enjoyed the Eggs Bendict servied with home made focaccia bread and hot coffee. Perfect service.",
    },
    {
      id: 3,
      name: "Susen",
      image: AiImg3,
      rating: "3",
      comment:
        "We enjoyed the Eggs Bendict servied with home made focaccia bread and hot coffee. Perfect service.",
    },
    {
      id: 4,
      name: "Willy Jayson",
      image: AiImg1,
      rating: "1",
      comment:
        "We enjoyed the Eggs Bendict servied with home made focaccia bread and hot coffee. Perfect service.",
    },
    {
      id: 5,
      name: "Rohit Sharma",
      image: AiImg2,
      rating: "2",
      comment:
        "We enjoyed the Eggs Bendict servied with home made focaccia bread and hot coffee. Perfect service.",
    },
  ];

  const renderStars = (rating: string) => {
    const filledStars = Array.from({ length: parseInt(rating) }, (_, i) => (
      <FontAwesomeIcon key={`filled-${i}`} icon={faStarSolid} color="gold" />
    ));
    const emptyStars = Array.from({ length: 5 - parseInt(rating) }, (_, i) => (
      <FontAwesomeIcon key={`empty-${i}`} icon={faStarRegular} color="gray" />
    ));
    return [...filledStars, ...emptyStars];
  };

  return (
    <Grid container display="flex" flexDirection="column">
      <Typography>Customer's Feedback</Typography>
      {data.map((customer, index) => (
        <>
          <Grid item padding="5px">
            <Box display="flex" alignItems="center">
              <Avatar
                src={customer.image}
                alt={customer.image}
                sx={{
                  marginRight: 1,
                  height: "35px",
                  width: "35px",
                  borderRadius: "30px",
                }}
              />
              <Typography>{customer.name}</Typography>
            </Box>
          </Grid>
          <Box>
            {
              /* {customer.rating === "5"
              ? 
              : customer.rating === "4"
              ? "*****"
              : customer.rating === "3"
              ? "***"
              : customer.rating === "2"
              ? "**"
              : customer.rating === "1"
              ? "*"
              : ""} */
              renderStars(customer.rating)
            }
          </Box>
          <Typography color="#ffffff" fontSize="12px">
            {customer.comment}
          </Typography>
          <Divider
            sx={{
              "&:last-child td, &:last-child th": { border: 0 },
              paddingTop: "10px",
              borderColor: "#C7C8CC",
            }}
          />
        </>
      ))}
    </Grid>
  );
};
