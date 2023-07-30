import { useParams } from "react-router-dom";
import { useGetCoinsQuery } from "../services/cryptoApi";
import { Box, Card, CardContent, Typography, Divider } from "@mui/material";
import Monetization from "@mui/icons-material/MonetizationOn";
import InfoIcon from "@mui/icons-material/Info";
import Business from "@mui/icons-material/Business";
import TrendingUp from "@mui/icons-material/TrendingUp";
import Exchange from "@mui/icons-material/CurrencyExchange";
import TagIcon from "@mui/icons-material/Tag";
import Flash from "@mui/icons-material/FlashOn";
import Events from "@mui/icons-material/EmojiEvents";
import SideBar from "./SideBar";
import millify from "millify";

const CryptoDetails = () => {
  const { id } = useParams();
  const { data } = useGetCoinsQuery("yhjMzLPhuIDl");
  const remains = data?.data?.coins.filter((item) => item.uuid == id);
  const statics = data?.data?.stats;
  const details = data;
  console.log("details...", details);
  // console.log("statics data...", statics);
  // console.log("remains data...", remains);
  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />
      <Box
        px={4}
        py={2}
        sx={{
          background: "#F9F9F9",
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {remains.map((item, i) => (
          <Box key={i}>
            <Typography
              sx={{
                fontSize: {
                  md: "26px",
                  sm: "18px",
                  xs: "16px",
                  fontWeight: 600,
                  color: "#0071bd",
                  textAlign: "center",
                },
              }}
            >
              {item.name} ({item.symbol}) Price
            </Typography>
            <Typography sx={{ textAlign: "center", color: "black" }}>
              {item.name} live price in US dollars. View value statistics market
              cap supply
            </Typography>
            <Box
              sx={{
                display: { md: "flex", sm: "block", xs: "block" },
                justifyContent: "space-around",
              }}
            >
              <Box sx={{ display: "flex", pt: 4 }}>
                <Card sx={{ maxWidth: 345, background: "rgb(213 211 211)" }}>
                  <CardContent>
                    <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
                      {item.name} Value Statistics
                    </Typography>
                    <Typography>
                      An overview showing the stats of {item.name}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        py: 2,
                      }}
                    >
                      <Box sx={{ display: "flex" }}>
                        <Monetization />
                        <Typography pl={2}>Price to USD</Typography>
                      </Box>
                      <Typography sx={{ fontWeight: 600 }}>
                        $ {millify(item.price)}
                      </Typography>
                    </Box>
                    <Divider />
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        py: 2,
                      }}
                    >
                      <Box sx={{ display: "flex" }}>
                        <TagIcon />
                        <Typography pl={2}>Rank</Typography>
                      </Box>
                      <Typography sx={{ fontWeight: 600 }}>
                        {item.rank}
                      </Typography>
                    </Box>
                    <Divider />
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        py: 2,
                      }}
                    >
                      <Box sx={{ display: "flex" }}>
                        <Flash />
                        <Typography pl={2}>24h Volume</Typography>
                      </Box>
                      <Typography sx={{ fontWeight: 600 }}>
                        {millify(Number(item["24hVolume"]))}
                      </Typography>
                    </Box>
                    <Divider />
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        py: 2,
                      }}
                    >
                      <Box sx={{ display: "flex" }}>
                        <Business />
                        <Typography pl={2}>Market Cap</Typography>
                      </Box>
                      <Typography sx={{ fontWeight: 600 }}>
                        {millify(item.marketCap)}
                      </Typography>
                    </Box>
                    <Divider />
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        py: 2,
                      }}
                    >
                      <Box sx={{ display: "flex" }}>
                        <Events />
                        <Typography pl={2}>
                          All-time-high(daily avg).
                        </Typography>
                      </Box>
                      <Typography sx={{ fontWeight: 600 }}>
                        {millify(item.listedAt)}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
              <Box sx={{ display: "flex", pt: 4, ml: { md: 4, sm: 0 } }}>
                <Card sx={{ maxWidth: 345, background: "rgb(213 211 211)" }}>
                  <CardContent>
                    <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
                      Other Statistics
                    </Typography>
                    <Typography>
                      An overview showing the stats of all cryptocurrencies
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        py: 2,
                      }}
                    >
                      <Box sx={{ display: "flex" }}>
                        <TrendingUp />
                        <Typography pl={2}>Number of Markets</Typography>
                      </Box>
                      <Typography sx={{ fontWeight: 600 }}>
                        $ {millify(statics.totalMarkets)}
                      </Typography>
                    </Box>
                    <Divider />
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        py: 2,
                      }}
                    >
                      <Box sx={{ display: "flex" }}>
                        <Exchange />
                        <Typography pl={2}>Number of Exchanges</Typography>
                      </Box>
                      <Typography sx={{ fontWeight: 600 }}>
                        {statics.totalExchanges}
                      </Typography>
                    </Box>
                    <Divider />
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        py: 2,
                      }}
                    >
                      <Box sx={{ display: "flex" }}>
                        <InfoIcon />
                        <Typography pl={2}>Approved Supply</Typography>
                      </Box>
                      <Typography sx={{ fontWeight: 600 }}>
                        {millify(Number(statics.totalMarketCap))}
                      </Typography>
                    </Box>
                    <Divider />
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        py: 2,
                      }}
                    >
                      <Box sx={{ display: "flex" }}>
                        <InfoIcon />
                        <Typography pl={2}>Total Supply</Typography>
                      </Box>
                      Tick
                    </Box>
                    <Divider />
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        py: 2,
                      }}
                    >
                      <Box sx={{ display: "flex" }}>
                        <InfoIcon />
                        <Typography pl={2}>Circulating Supply</Typography>
                      </Box>
                      <Typography sx={{ fontWeight: 600 }}>
                        {millify(statics.totalMarketCap)}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CryptoDetails;
