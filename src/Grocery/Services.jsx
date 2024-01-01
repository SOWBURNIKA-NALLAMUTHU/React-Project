import React from "react";
import { Box, Typography } from "@mui/material";

const Services = () => {
  return (
    <Box
      sx={{
        backgroundImage:
          'url("https://img.freepik.com/free-vector/hand-painted-watercolor-nature-background_23-2148941603.jpg?w=996&t=st=1701072227~exp=1701072827~hmac=4b8a95d934abffb0637fd751e4af2594c723e259cabcbb1e770dafc92b6c3f92")', // Replace with the actual path to your image
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "black",
        padding: "20px",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h3" sx={{ color: "olivedrab" }}>
        GROCERY SERVICES
      </Typography>
      <Typography>
        <b>Wide Product Selection:</b> Explore a variety of fresh produce,
        pantry staples, and more.
      </Typography>
      <Typography>
        <b>Convenient Delivery:</b> Enjoy doorstep delivery with flexible time
        slots.
      </Typography>
      <Typography>
        <b>Customized Bundles:</b> Create personalized grocery bundles based on
        your preferences.
      </Typography>
      <Typography>
        <b>Mobile-Friendly Experience:</b> Shop easily on your smartphone or
        tablet.
      </Typography>
      <Typography>
        <b>Product Information:</b> Find detailed information on each product,
        including origin and nutritional facts.
      </Typography>
    </Box>
  );
};

export default Services;
