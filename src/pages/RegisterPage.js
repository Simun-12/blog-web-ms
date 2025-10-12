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
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

const RegisterPage = ({ open, onClose }) => {
  const [dob, setDob] = useState(dayjs());
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [usernameError, setUsernameError] = useState("");
  const [passwordHint, setPasswordHint] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    bio: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "password") {
      validatePassword(value);
    }
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
      if (exists) {
        setUsernameError("Username already taken");
      } else {
        setUsernameError("");
      }
    } catch (err) {
      console.error("Error checking username:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (usernameError) return;

    setLoading(true);
    const userData = {
      ...formData,
      dob: dob ? dob.format("YYYY-MM-DD") : null,
    };

    try {
      const response = await fetch(
        "http://localhost:8080/api/users/createUser",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
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
          p: 4,
          borderRadius: 2,
          width: 370,
          boxShadow: 24,
        }}
      >
        <Typography
          variant="h6"
          mb={2}
          textAlign="center"
          sx={{ fontWeight: "bold" }}
        >
          Create Account
        </Typography>

        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              fullWidth
              required
            />

            <TextField
              label="User Name"
              name="userName"
              value={formData.userName}
              onChange={(e) => {
                handleChange(e);
                checkUsername(e.target.value);
              }}
              error={!!usernameError}
              helperText={usernameError}
              fullWidth
              required
            />

            <TextField
              label="Tell us about you"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              fullWidth
            />

            <TextField
              label="Email Address"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              required
            />

            <TextField
              label="Password"
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              fullWidth
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

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Date of Birth"
                value={dob}
                onChange={(newValue) => setDob(newValue)}
                slotProps={{
                  textField: { fullWidth: true, required: true },
                }}
              />
            </LocalizationProvider>

            <Button
              type="submit"
              variant="contained"
              disabled={loading || !!usernameError}
              sx={{
                mt: 1,
                bgcolor: "#1976d2",
                "&:hover": { bgcolor: "#1565c0" },
              }}
            >
              {loading ? "Registering..." : "Register"}
            </Button>

            <Typography
              variant="body2"
              align="center"
              sx={{ mt: 1, color: "text.secondary" }}
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
