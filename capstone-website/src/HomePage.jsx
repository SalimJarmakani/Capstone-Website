import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  ThemeProvider,
  styled,
  createTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import Team from "./components/Team";

const people = [
  {
    name: "Salim Al Jarmakani",
    role: "Team Lead And Full-Stack Developer",
    imageUrl: "/cropped_salim.jpg",
    linkedInUrl: "https://linkedin.com/in/johndoe",
  },
  {
    name: "Vladimir Gvaramadze",
    role: "Front-End Developer",
    imageUrl: "/img_avatar.png",
    linkedInUrl: "https://linkedin.com/in/janesmith",
  },
  {
    name: "Aayush Gautam",
    role: "Design",
    imageUrl: "/img_avatar.png",
    linkedInUrl: "https://linkedin.com/in/alexjohnson",
  },
  {
    name: "Xinfu Guo",
    role: "Developer",
    imageUrl: "/img_avatar.png",
    linkedInUrl: "https://linkedin.com/in/alexjohnson",
  },
];

const darkTheme = createTheme({ palette: { mode: "dark" } });
const HomePage = () => {
  return (
    <div>
      {/* Navbar */}
      <ThemeProvider theme={darkTheme}>
        <AppBar
          position="static"
          sx={
            {
              // background: "linear-gradient(315deg, #002a5c 0%, #1a4e8c 100%);",
            }
          }
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
                color: "linear-gradient(315deg, #002a5c 0%, #1a4e8c 100%);",
              }}
            >
              Solution Architects
            </Typography>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/contact">
              Contact
            </Button>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
      {/* Content */}
      <Container>
        {/* Pass the people array to Team component */}
        <Team people={people} />
      </Container>
    </div>
  );
};

export default HomePage;
