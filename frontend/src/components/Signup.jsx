import React from "react";
import Container from "./common/Container";
import Heading from "./common/Heading";
import { Box, Button, FormControl, Link } from "@mui/material";
import InputField from "./common/InputField";

const Signup = () => {
  return (
    <>
      <Container>
        <Heading>Signup</Heading>
        <FormControl
          sx={{
            p: "2rem 0",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            textAlign: "center",
          }}
        >
          <InputField label="Fullname" />
          <InputField label="Username" />
          <InputField label="Email" />
          <InputField label="Password" />
          <Link href="/login">Already have an account?</Link>
          <Button variant="contained">Signup</Button>
        </FormControl>
      </Container>
    </>
  );
};

export default Signup;
