import React from "react";
import {
  Card,
  Box,
  Typography,
  Button,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { LinkedIn as LinkedInIcon } from "@mui/icons-material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5899e2", // Light blue
    },
    secondary: {
      main: "#0077b5", // LinkedIn blue
    },
  },
  typography: {
    fontFamily: "monospace",
  },
});
const GroupMember = ({ name, role, imageUrl, linkedInUrl }) => {
  return (
    <ThemeProvider theme={theme}>
      <Card
        sx={{
          padding: 2,
          width: 150, // Fixed width for all cards
          height: 300, // Fixed height for all cards
          margin: 1,
          display: "flex", // Flex layout
          flexDirection: "column", // Ensure vertical stacking
          justifyContent: "space-between", // Space out the content
          alignItems: "center", // Center align content
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          borderRadius: "16px",
          background: `linear-gradient(315deg, #ffffff 0%, ${theme.palette.primary.main} 25%)`,
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
            height: "50%", // Maintain aspect ratio
            maxHeight: 200,
            minHeight: "50",
            objectFit: "cover",
            borderRadius: "16px", // Rounded corners
            marginBottom: "16px", // Space below the image,
            minWidth: 50,
          }}
        />

        {/* Info Section */}
        <Box sx={{ flexGrow: 1 }}>
          <Typography fontFamily="monospace;" variant="h9" fontWeight="bold">
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
    </ThemeProvider>
  );
};

export default GroupMember;
