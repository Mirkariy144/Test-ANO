import { Box, Card } from "@mui/material";
import { Cards } from "./Cards";
import { response } from "../respons/response";

export function GridItems() {
  const resArr = response;
  return (
    <Box sx={{ width: "85vw" }}>
      <Card sx={{ height: "100%", width: "100%" }}>
        {resArr.map((item) => {
          return <Cards response={item} />;
        })}
      </Card>
    </Box>
  );
}
