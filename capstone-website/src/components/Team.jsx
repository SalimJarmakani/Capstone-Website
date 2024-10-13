import React from "react";
import Grid from "@mui/material/Grid2";

import GroupMember from "./GroupMember";

const Team = ({ people }) => {
  return (
    <Grid container spacing={4} padding="0">
      {people.map((person, index) => (
        <Grid xs={12} sm={6} md={4} key={index} alignContent="center">
          <GroupMember
            name={person.name}
            role={person.role}
            imageUrl={person.imageUrl}
            linkedInUrl={person.linkedInUrl}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Team;
