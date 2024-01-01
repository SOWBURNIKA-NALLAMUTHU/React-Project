import React, { useState } from "react";
import { Container, Typography, Paper, TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };
  const handleLogin = (e) => {
    e.preventDefault();

    const correctEmail = "react@gmail.com";
    const correctPassword = "123456";

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!email) {
      setErrEmail("Email is required.");
    } else if (email !== correctEmail) {
      setErrEmail("Invalid email. Please check your email.");
    } else {
      setErrEmail("");
    }

    if (!password) {
      setErrPassword("Password is required.");
    } else if (password !== correctPassword) {
      setErrPassword("Incorrect password. Please try again.");
    } else if (password && !passwordRegex.test(password)) {
      setErrPassword(
        "Password must be at least 8 characters long and contain at least one letter and one number."
      );
    } else {
      setErrPassword("");
    }

    if (email === correctEmail && password === correctPassword) {
      setSuccessMsg(
        `Hello dear, Thank you for your attempt. We are processing to validate your access. Till then stay connected and additional assistance will be sent to you by your mail at ${email}`
      );
      setEmail("");
      navigate("/");
    }
  };
  return (
    <Container
      maxWidth="100%"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "teal",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1512389055488-8d82cb26ba6c?q=80&w=1883&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", // Replace with your image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Paper
        elevation={8}
        style={{ padding: "30px", width: "600px", height: "300px" }}
      >
        <Typography variant="h6" align="center">
          LOGIN
        </Typography>

        <form>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            variant="contained"
            color="success"
            fullWidth
            style={{ marginTop: "20px" }}
            onClick={handleLogin}
          >
            Login
          </Button>
        </form>
      </Paper>
    </Container>
  );
};
export default Login;
