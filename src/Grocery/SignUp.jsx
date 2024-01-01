import { useState } from "react";
import { Container, Typography, Paper, TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate(); //  returns a function

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    console.log("Signing up with the following details:");
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    // navigate("/login");
    navigate("/home");
  };

  return (
    <Container
      maxWidth="100%"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1514810771018-276192729582?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2FybXxlbnwwfHwwfHx8MA%3D%3D')", // Replace with your image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Paper
        elevation={8}
        style={{
          padding: "20px",
          width: "700px",
        }}
      >
        <Typography variant="h5" align="center">
          Sign Up
        </Typography>

        <form>
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            label="Last Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
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
          <TextField
            label="Confirm Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />{" "}
          <Button
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: "20px" }}
            onClick={handleSignUp}
          >
            Sign Up
          </Button>
          <Typography sx={{ marginTop: "16px" }}>
            Already a user ? <Link to="/login">Login</Link>
          </Typography>
        </form>
      </Paper>
    </Container>
  );
};

export default SignUp;
