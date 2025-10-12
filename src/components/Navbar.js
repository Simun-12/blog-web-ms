import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "#eee6d5",
        color: "black",
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          py: { xs: 2, md: 3 }, // thicker navbar
          px: { xs: 4, md: 6 }, // padding from edges
        }}
      >
        {/* Left logo */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            letterSpacing: "0.5px",
            cursor: "pointer",
            ml: 20, // slightly less than double previous (~30px)
          }}
        >
          BlogVerse
        </Typography>

        {/* Right nav links + button */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 3, md: 5 }, // more space between links
            mr: { xs: 0, md: 5 }, // bring items slightly towards center
          }}
        >
          <Typography sx={{ cursor: "pointer", fontSize: { xs: "1.1rem", md: "1.25rem" } }}>
            Our Story
          </Typography>
          <Typography sx={{ cursor: "pointer", fontSize: { xs: "1.1rem", md: "1.25rem" } }}>
            Membership
          </Typography>
          <Typography sx={{ cursor: "pointer", fontSize: { xs: "1.1rem", md: "1.25rem" } }}>
            Write
          </Typography>
          <Typography sx={{ cursor: "pointer", fontSize: { xs: "1.1rem", md: "1.25rem" } }}>
            Sign In
          </Typography>
          <Button
            variant="contained"
            sx={{
                mr:20,
              borderRadius: 20,
              textTransform: "none",
              backgroundColor: "black",
              fontSize: { xs: "1rem", md: "1.1rem" },
              "&:hover": { backgroundColor: "#1565c0", cursor: "pointer" },
            }}
          >
            Get Started
          </Button>
        </Box>
      </Toolbar>

      {/* Sleek bottom line */}
      <Box sx={{ height: "1px", width: "100%", bgcolor: "black" }} />
    </AppBar>
  );
};

export default Navbar;
