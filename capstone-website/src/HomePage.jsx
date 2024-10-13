import React from "react";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import Team from "./components/Team";

const people = [
  {
    name: "Salim Al Jarmakani",
    role: "Team Lead And Full-Stack Developer",
    imageUrl: "/cropped_salim.jpg",
    linkedInUrl: "https://linkedin.com/in/johndoe",
  },
  {
    name: "Jane Smith",
    role: "Backend Developer",
    imageUrl: "https://example.com/jane-avatar.jpg",
    linkedInUrl: "https://linkedin.com/in/janesmith",
  },
  {
    name: "Alex Johnson",
    role: "Project Manager",
    imageUrl: "https://example.com/alex-avatar.jpg",
    linkedInUrl: "https://linkedin.com/in/alexjohnson",
  },
  // Add more people as needed
];

const HomePage = () => {
  return (
    <div>
      {/* Navbar */}
      <AppBar
        position="static"
        sx={{
          background: "linear-gradient(315deg, #002a5c 0%, #1a4e8c 100%);",
        }}
      >
        <Toolbar>
          <Typography
            variant="dense"
            fontSize="25px"
            color="black"
            fontWeight="bold"
            sx={{
              fontFamily: " monospace, sans-serif",
              marginRight: "auto",
            }}
          >
            Solution Architects
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>

      {/* Content */}
      <Container>
        {/* Pass the people array to Team component */}
        <Team people={people} />
      </Container>
    </div>
  );
};

export default HomePage;
