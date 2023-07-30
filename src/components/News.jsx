import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import SideBar from "./SideBar";
import { useGetNewsQuery } from "../services/newsApi";
import moment from "moment";
import Header from "./Header";

const News = () => {
  const { data: cryptoNews, isLoading, isError, error } = useGetNewsQuery(100);
  console.log("The data in news...", cryptoNews?.value);
  const respo = cryptoNews?.value;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <Box sx={{ display: { md: "flex", sm: "block", xs: "block" } }}>
      <Box sx={{ display: { md: "block", sm: "none", xs: "none" } }}>
        <SideBar />
      </Box>
      <Box sx={{ display: { md: "none", sm: "block", xs: "block" } }}>
        <Header />
      </Box>
      <Box px={4} py={2} sx={{ background: "#F9F9F9", width: "100%" }}>
        <Grid container>
          {respo?.map((item, i) => (
            <Grid item md={4} sm={12} xs={12} key={i}>
              <Card
                sx={{
                  width: 340,
                  height: "100%",
                  maxHeight: 350,
                  mt: 2,
                  "&:hover": {
                    boxShadow: "2px 2px 5px 2px gray",
                  },
                }}
                key={i}
              >
                <CardContent>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography sx={{ fontSize: 16, fontWeight: 600, pt: 1 }}>
                      {item?.name}
                    </Typography>
                    <Box
                      component="img"
                      src={item?.image?.thumbnail?.contentUrl}
                      width="100px"
                      height="100px"
                    />
                  </Box>
                  <Typography pt={2} sx={{ fontSize: "14px" }}>
                    {item?.description}
                  </Typography>
                  <Box
                    sx={{
                      pt: 1,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Avatar
                        alt="Remy Sharp"
                        src={item?.provider[0]?.image?.thumbnail?.contentUrl}
                      />
                      <Typography pl={1} sx={{ fontSize: "13px" }}>
                        {item?.provider[0]?.name}
                      </Typography>
                    </Box>
                    <Typography pl={1}>
                      {moment(item?.datePublished).startOf("ss").fromNow()}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default News;
