import React from "react";
import { Card, Box, Typography, Button } from "@mui/material";
import { LinkedIn as LinkedInIcon } from "@mui/icons-material";

const GroupMember = ({ name, role, imageUrl, linkedInUrl }) => {
  return (
    <Card
      sx={{
        padding: 2,
        maxWidth: 225, // Adjust the width of the card
        margin: 1,
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        borderRadius: "16px",
        backgroundImage: "linear-gradient(315deg, #ffffff 0%, #5899e2 74%);",
        textAlign: "center", // Center align text content
        "&:hover": {
          boxShadow: "0px 8px 50px rgba(255, 255, 255, 0.4)",
        },
      }}
    >
      {/* Avatar */}
      <img
        src={imageUrl}
        alt={name}
        style={{
          width: "50%", // Make the image full width of the card
          height: "35%", // Maintain aspect ratio
          borderRadius: "16px", // Rounded corners
          marginBottom: "16px", // Space below the image
        }}
      />

      {/* Info Section */}
      <Box sx={{ flexGrow: 1 }}>
        <Typography fontFamily="monospace;" variant="h6" fontWeight="bold">
          {name}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          {role}
        </Typography>
      </Box>

      {/* LinkedIn Button */}
      <Button
        variant="contained"
        startIcon={<LinkedInIcon />}
        onClick={() => window.open(linkedInUrl, "_blank")}
        sx={{
          backgroundColor: "#0077b5",
          "&:hover": { backgroundColor: "#005582" },
        }}
      />
    </Card>
  );
};

export default GroupMember;
