import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  IconButton,
  InputAdornment,
  Link,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const RegisterPage = ({ open, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [usernameError, setUsernameError] = useState("");
  const [passwordHint, setPasswordHint] = useState("");
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "password") validatePassword(value);
  };

  const validatePassword = (password) => {
    const isStrong =
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[^A-Za-z0-9]/.test(password);
    setPasswordHint(
      isStrong
        ? "✅ Strong password"
        : "Password should be 8+ chars, include upper, lower, number & symbol"
    );
  };

  const checkUsername = async (username) => {
    if (!username) return;
    try {
      const res = await fetch(
        `http://localhost:8080/api/users/exists/${username}`
      );
      const exists = await res.json();
      setUsernameError(exists ? "Username already taken" : "");
    } catch (err) {
      console.error("Error checking username:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (usernameError) return;

    setLoading(true);
    try {
      const response = await fetch(
        "http://localhost:8080/api/users/createUser",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        const result = await response.json();
        console.log("✅ User created:", result);
        alert("User registered successfully!");
        onClose();
      } else {
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("⚠️ Error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          py: 4, // reduced vertical padding
          px: 15,
          width: { xs: 350, md: 450 }, // slightly narrower modal
          boxShadow: 24,
          borderRadius: 3,
        }}
      >
        {/* Modal Title near top */}
        <Typography
          variant="h4"
          mb={4} // space below title
          textAlign="center"
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: "bold",
          }}
        >
          Join BlogVerse
        </Typography>

        <form onSubmit={handleSubmit}>
          <Stack spacing={3} alignItems="center">
            <TextField
              label="Username"
              name="userName"
              value={formData.userName}
              onChange={(e) => {
                handleChange(e);
                checkUsername(e.target.value);
              }}
              error={!!usernameError}
              helperText={usernameError}
              fullWidth
              sx={{ maxWidth: 300 }} // reduced width
              required
            />

            <TextField
              label="Email ID"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              sx={{ maxWidth: 300 }}
              required
            />

            <TextField
              label="Password"
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              fullWidth
              sx={{ maxWidth: 300 }}
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword((prev) => !prev)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              helperText={passwordHint}
            />

            <Button
              type="submit"
              variant="contained"
              disabled={loading || !!usernameError}
              sx={{
                mt: 1,
                width: 300,
                bgcolor: "#1976d2",
                "&:hover": { bgcolor: "#1565c0" },
              }}
            >
              {loading ? "Registering..." : "Register"}
            </Button>

            <Typography
              variant="body2"
              align="center"
              sx={{ color: "text.secondary" }}
            >
              Already a user?{" "}
              <Link
                href="#"
                underline="hover"
                sx={{ fontWeight: "bold", cursor: "pointer" }}
                onClick={() => {
                  onClose();
                  alert("Open Sign In Modal (to be implemented)");
                }}
              >
                Sign in
              </Link>
            </Typography>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
};

export default RegisterPage;
