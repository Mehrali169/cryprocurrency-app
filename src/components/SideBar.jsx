import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import ChartIcon from "@mui/icons-material/InsertChart";
import EmojiIcon from "@mui/icons-material/EmojiObjects";
import { Link } from "react-router-dom";
import logo from "../assets/cryptocurrency.png";

const drawerWidth = 240;

export default function SideBar() {
  const option = [
    { text: "Home", icon: <HomeIcon />, to: "/" },
    { text: "Cryptocurrencies", icon: <ChartIcon />, to: "/crypto-currencies" },
    { text: "News", icon: <EmojiIcon />, to: "/news" },
  ];
  return (
    <Box sx={{ background: "orange", display: "flex" }}>
      <CssBaseline />
      <Box
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          <Box component="img" src={logo} alt="logo" width="10%" />
          <Typography
            variant="h1"
            sx={{
              fontSize: "24px",
              fontWeight: 600,
              color: "#0071bd",
              pl: 1,
            }}
          >
            Cryptoverse
          </Typography>
        </Toolbar>
      </Box>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "rgb(0, 21, 41);",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {option.map(({ text, icon, to }, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton component={Link} to={to}>
                  <ListItemIcon style={{ color: "white" }}>{icon}</ListItemIcon>
                  <ListItemText sx={{ color: "#fff" }} primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
