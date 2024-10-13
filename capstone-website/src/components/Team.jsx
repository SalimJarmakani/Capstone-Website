import React from "react";
import { Grid2 } from "@mui/material";

import GroupMember from "./GroupMember";

const Team = ({ people }) => {
  return (
    <Grid2 container spacing={5}>
      {people.map((person, index) => (
        <Grid2 item xs={12} sm={6} md={4} key={index}>
          <GroupMember
            name={person.name}
            role={person.role}
            imageUrl={person.imageUrl}
            linkedInUrl={person.linkedInUrl}
          />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default Team;
