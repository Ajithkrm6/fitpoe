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
        "The Food was excellent and so as the service. I had mushroom risotto with scallions which was awesome. I had a burger with greens (gluten-free) which was also very good. They were very cautious about gluten allergies.",
    },
    {
      id: 2,
      name: "Jordan Meckey",
      image: AiImg2,
      rating: "4",
      comment:
        "We enjoyed the Eggs Benedict served with homemade focaccia bread and hot coffee. Perfect service.",
    },
    {
      id: 3,
      name: "Susen",
      image: AiImg3,
      rating: "3",
      comment:
        "We enjoyed the Eggs Benedict served with homemade focaccia bread and hot coffee. Perfect service.",
    },
    {
      id: 4,
      name: "Willy Jayson",
      image: AiImg1,
      rating: "1",
      comment:
        "We enjoyed the Eggs Benedict served with homemade focaccia bread and hot coffee. Perfect service.",
    },
    {
      id: 5,
      name: "Rohit Sharma",
      image: AiImg2,
      rating: "2",
      comment:
        "We enjoyed the Eggs Benedict served with homemade focaccia bread and hot coffee. Perfect service.",
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
    <Grid container direction="column">
      <Typography
        color="#ffffff"
        sx={{
          fontWeight: "bold",
        }}
      >
        Customer's Feedback
      </Typography>
      {data.map((customer) => (
        <Box
          key={customer.id}
          display="flex"
          flexDirection="column"
          sx={{ marginBottom: "15px", width: "100%" }}
        >
          <Grid item sx={{ padding: "5px" }}>
            <Box display="flex" alignItems="center">
              <Avatar
                src={customer.image}
                alt={customer.name}
                sx={{
                  marginRight: 1,
                  height: "35px",
                  width: "35px",
                  borderRadius: "30px",
                }}
              />
              <Typography sx={{ color: "#ffffff", fontSize: "14px" }}>
                {customer.name}
              </Typography>
            </Box>
          </Grid>
          <Box sx={{ display: "flex", marginTop: "5px", marginBottom: "5px" }}>
            {renderStars(customer.rating)}
          </Box>
          <Typography
            color="#ffffff"
            fontSize="12px"
            sx={{
              padding: "5px",
              lineHeight: "1.4",
              wordWrap: "break-word",
              wordBreak: "break-word",
              whiteSpace: "pre-wrap",
            }}
          >
            {customer.comment}
          </Typography>
          <Divider
            sx={{
              "&:last-child td, &:last-child th": { border: 0 },
              marginTop: "10px",
              borderColor: "#C7C8CC",
            }}
          />
        </Box>
      ))}
    </Grid>
  );
};
