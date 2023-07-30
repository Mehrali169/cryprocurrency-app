import {
  Box,
  Typography,
  Grid,
  Divider,
  Card,
  CardContent,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { useGetCoinsQuery } from "../services/cryptoApi";
import { useGetNewsQuery } from "../services/newsApi";
import SideBar from "./SideBar";
import millify from "millify";
import { Link } from "react-router-dom";
import moment from "moment/moment";
import Header from "./Header";

const Home = () => {
  const { data, isLoading, isError, error } = useGetCoinsQuery("yhjMzLPhuIDl");
  const { data: cryptoNews } = useGetNewsQuery();
  const response = data?.data?.stats;
  const cryptoData = data?.data.coins;
  const respo = cryptoNews?.value;

  console.log("respo....", respo);
  // console.log("logo....", respo?.provider[0]?.image);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Box
      sx={{
        display: { md: "flex", sm: "block", xs: "block" },
        background: "#F9F9F9",
      }}
    >
      <Box sx={{ display: { md: "block", sm: "none", xs: "none" } }}>
        <SideBar />
      </Box>
      <Box sx={{ display: { md: "none", sm: "block", xs: "block" } }}>
        <Header />
      </Box>
      <Box px={4} py={2} sx={{ width: "100%" }}>
        <Typography variant="h1" sx={{ fontSize: "25px" }}>
          Global Crypto Stats
        </Typography>
        <Grid container pt={2}>
          <Grid item md={6} sm={12} xs={12}>
            <Typography sx={{ py: 1, color: "gray" }}>
              Total Currencies
            </Typography>
            <Typography sx={{ fontSize: "20px" }}>{response.total}</Typography>
            <Typography sx={{ py: 1, color: "gray" }}>
              Total Market Cap
            </Typography>
            <Typography sx={{ fontSize: "20px" }}>
              {millify(response?.totalMarketCap)}
            </Typography>
            <Typography sx={{ py: 1, color: "gray" }}>Total Markets</Typography>
            <Typography sx={{ fontSize: "20px" }}>
              {millify(response?.totalMarkets)}
            </Typography>
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <Typography sx={{ py: 1, color: "gray" }}>
              Total Exchanges
            </Typography>
            <Typography sx={{ fontSize: "20px" }}>
              {millify(response?.totalExchanges)}
            </Typography>
            <Typography sx={{ py: 1, color: "gray" }}>
              Total 24h Volume
            </Typography>
            <Typography sx={{ fontSize: "20px" }}>
              {millify(response?.total24hVolume)}
            </Typography>
          </Grid>
        </Grid>
        <Divider sx={{ pt: 2 }} />
        <Box
          sx={{
            display: { md: "flex", sm: "block" },
            justifyContent: "space-between",
            fontWeight: 500,
            pt: 2,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { md: "25px", sm: "18px", xs: "18px" },
            }}
          >
            Top 10 Cryptocurrencies in the World
          </Typography>
          <Link to="/crypto-currencies" style={{ textDecoration: "none" }}>
            <Typography sx={{ fontSize: "20px", color: "#0071bd" }}>
              Show More
            </Typography>
          </Link>
        </Box>
        <Grid container>
          {cryptoData.slice(0, 10).map((item, i) => (
            <Grid item md={3} sm={6} xs={12} key={i}>
              <Card
                sx={{
                  maxWidth: 300,
                  width: 250,
                  height: 200,
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
                      {item.rank}. {item.name}
                    </Typography>
                    <Box
                      component="img"
                      src={item.iconUrl}
                      width="15%"
                      height="15%"
                    />
                  </Box>
                  <Divider sx={{ pt: 2 }} />
                  <Typography pt={2}>Price: {millify(item.price)}</Typography>
                  <Typography>Market Cap: {millify(item.marketCap)}</Typography>
                  <Typography>
                    Daily Changes: {millify(item.change)} %
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Divider sx={{ pt: 4 }} />
        <Box
          sx={{
            display: { md: "flex", sm: "block" },
            justifyContent: "space-between",
            py: 2,
            fontWeight: 500,
          }}
        >
          <Typography variant="h1" sx={{ fontSize: "25px" }}>
            Latest Crypto News
          </Typography>
          <Link to="/news" style={{ textDecoration: "none" }}>
            <Typography sx={{ fontSize: "20px", color: "#0071bd" }}>
              Show More
            </Typography>
          </Link>
        </Box>
        <Grid container>
          {respo?.slice(0, 10).map((item, i) => (
            <Grid item md={4} sm={6} xs={12} key={i}>
              <Card
                sx={{
                  width: 340,
                  height: 320,
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

export default Home;
