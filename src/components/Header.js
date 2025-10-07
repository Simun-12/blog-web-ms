import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Box,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Header() {
  const [open, setOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const handleAvatarClick = () => {
    if (loggedIn) {
      // Redirect to profile (for now just alert)
      alert("Redirecting to profile of " + username);
    } else {
      setOpen(true);
    }
  };

  const handleLogin = () => {
    if (username.trim()) {
      setLoggedIn(true);
      setOpen(false);
    }
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#fff", color: "#000" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* User avatar */}
          <IconButton onClick={handleAvatarClick}>
            {loggedIn ? (
              <Avatar sx={{ bgcolor: "#1976d2" }}>
                {username[0].toUpperCase()}
              </Avatar>
            ) : (
              <Avatar>
                <AccountCircleIcon />
              </Avatar>
            )}
          </IconButton>

          {/* App Title */}
          <Typography
            variant="h5"
            sx={{ flexGrow: 1, textAlign: "center", fontWeight: 700 }}
          >
            Medium Clone 📝
          </Typography>

          {/* Empty box to balance layout */}
          <Box width="40px" />
        </Toolbar>
      </AppBar>

      {/* Login/Register Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Login / Register</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Enter Username"
            type="text"
            fullWidth
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Box mt={2} display="flex" justifyContent="flex-end">
            <Button variant="contained" onClick={handleLogin}>
              Continue
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Header;
