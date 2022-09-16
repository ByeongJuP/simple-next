import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@material-ui/icons";
import { Fragment, useState } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [anchor, setAnchor] = useState(null);

  const closeMenu = () => setAnchor(null);

  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            nextjs page
          </Typography>
        </Toolbar>
      </AppBar>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
