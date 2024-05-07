import React from "react";
import Container from "./common/Container";
import Heading from "./common/Heading";
import { Box, Button, FormControl, Link } from "@mui/material";
import InputField from "./common/InputField";

const Login = () => {
  return (
    <>
      <Container>
        <Heading>LOGIN</Heading>
        <FormControl
          sx={{
            p: "2rem 0",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            textAlign: "center",
          }}
        >
          <InputField label="Email" />
          <InputField label="Password" />
          <Link href="/signup">Don't have an account?</Link>
          <Button variant="contained">Login</Button>
        </FormControl>
      </Container>
    </>
  );
};

export default Login;
