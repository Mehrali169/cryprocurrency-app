import { Box, Typography } from "@mui/material";
import SideBar from "./SideBar";

const Exchanges = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />
      <Box px={4} py={2} sx={{ background: "#F9F9F9", width: "100%" }}>
        <Typography>Echanges</Typography>
      </Box>
    </Box>
  );
};

export default Exchanges;
