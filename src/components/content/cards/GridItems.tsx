import { Box, Card, Grid } from "@mui/material";

import React from "react";
import { Cards } from "./Cards";
import { response } from "../respons/response";

export function GridItems() {
  const resArr = response;
  return (
    <Box sx={{ width: "85vw" }}>
      <Card sx={{ height: "100%", width: "100%" }}>
        {/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}> */}
        {resArr.map((item) => {
          return (
            // <Grid key={item.applicationNumber}>
            <Cards response={item} />
            // {/* </Grid> */}
          );
        })}
        {/* </Grid> */}
      </Card>
    </Box>
  );
}
