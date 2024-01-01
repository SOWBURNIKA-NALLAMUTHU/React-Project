import React from "react";
import { Box, Paper, Typography } from "@mui/material";

const Contact = () => {
  return (
    <Box
      sx={{
        backgroundImage:
          'url("https://png.pngtree.com/thumb_back/fh260/background/20190222/ourmid/pngtree-yellow-autumn-hillside-trees-autumn-pleasant-background-image_56152.jpg")',
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
      <Typography variant="h4" sx={{ color: "white" }}>
        <b>Contact Us</b>
      </Typography>
      <b>
        <p sx={{ color: "white" }}>
          Customer Feedback: Share your thoughts and suggestions with us.
        </p>
        <p>
          Fresh Produce: Explore our selection of high-quality fresh groceries.
        </p>
        <p>Follow Us: Stay updated on our latest offerings on social media.</p>
      </b>

      <Box sx={{ m: 3, width: "600px" }}>
        <Paper elevation={3} sx={{ p: 2, bgcolor: "black", color: "white" }}>
          <Typography variant="h6" align="center">
            Contact Details
          </Typography>
          <ul>
            <li>
              <b>Customer Support:</b> 1800-123-4567
            </li>
            <li>
              <b>Email:</b> support@groceryshop.com
            </li>
            <li>
              <b>WhatsApp:</b> +123 456 7890
            </li>
          </ul>
        </Paper>
      </Box>
    </Box>
  );
};

export default Contact;
