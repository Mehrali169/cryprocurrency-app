import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  InputBase,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useGetCoinsQuery } from "../services/cryptoApi";
import SideBar from "./SideBar";
import millify from "millify";
import { NavLink } from "react-router-dom";
import Header from "./Header";

const Cryptocurrencies = () => {
  const { data, isLoading, isError, error } = useGetCoinsQuery("yhjMzLPhuIDl");
  const [cryptoData, setCryptoData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  console.log("data....", cryptoData);

  useEffect(() => {
    const filterData = data?.data?.coins.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCryptoData(filterData);
  }, [data, searchTerm]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <>
      <Box sx={{ display: { md: "flex", sm: "block", xs: "block" } }}>
        <Box sx={{ display: { md: "block", sm: "none", xs: "none" } }}>
          <SideBar />
        </Box>
        <Box sx={{ display: { md: "none", sm: "block", xs: "block" } }}>
          <Header />
        </Box>
        <Box px={4} py={2} sx={{ background: "#F9F9F9", width: "100%" }}>
          <Box sx={{ textAlign: "center" }}>
            <InputBase
              placeholder="Search Cryptocurrencies"
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{
                py: 2,
                borderRadius: "50px",
                border: "1px solid gray",
                px: 2,
                width: { md: "30%", sm: "50%", xs: "70%" },
                height: "50px",
              }}
            />
          </Box>
          <Grid container>
            {cryptoData?.map((item, i) => (
              <Grid item md={3} sm={6} xs={12} key={i}>
                <NavLink
                  to={"/crypto-details/" + item.uuid}
                  style={{ textDecoration: "none" }}
                >
                  <Card
                    sx={{
                      maxWidth: 300,
                      maxHeight: 300,
                      width: 250,
                      height: "100%",
                      mt: 2,
                      "&:hover": {
                        boxShadow: "2px 2px 5px 2px gray",
                      },
                    }}
                    key={i}
                  >
                    <CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography
                          sx={{ fontSize: 16, fontWeight: 600, pt: 1 }}
                        >
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
                      <Typography pt={2}>
                        Price: {millify(item.price)}
                      </Typography>
                      <Typography>
                        Market Cap: {millify(item.marketCap)}
                      </Typography>
                      <Typography>
                        Daily Changes: {millify(item.change)} %
                      </Typography>
                    </CardContent>
                  </Card>
                </NavLink>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Cryptocurrencies;
