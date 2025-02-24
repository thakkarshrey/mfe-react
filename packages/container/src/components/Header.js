import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";

export default function Header({ isSignedIn, onLogout }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>

            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", sm: "block" },
                }}
                style={{ color: "white" }}
              >
                App
              </Typography>
            </Link>
          </div>

          <Link
            to={isSignedIn ? "/" : "/auth/signin"}
            style={{ textDecoration: "none" }}
          >
            <Button
              fullWidth
              variant="outlined"
              style={{ color: "white", borderColor: "white" }}
              onClick={() => {
                if (isSignedIn && onLogout) {
                  onLogout();
                }
              }}
            >
              {isSignedIn ? "Logout" : "Login"}
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
