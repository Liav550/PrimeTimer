import { Box, Checkbox, FormControl, Input, InputLabel } from "@mui/material";
import { StyledButton } from "./ui/Button";
import { colorPallete } from "../utils/constants";

export const LoginPage = () => {
  const onsubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Submitted");
  };

  return (
    <Box
      component={"form"}
      onSubmit={onsubmit}
      sx={{
        border: "1px solid black",
        padding: "2rem",
        width: { md: "30%", xs: "80%" },
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: colorPallete.secondary,
        gap: "1rem",
        boxShadow: "1px -1px 41px 11px " + colorPallete.accent,
      }}
    >
      <Box component={"h1"}>Sign In</Box>
      <FormControl fullWidth>
        <InputLabel htmlFor="email">Email</InputLabel>
        <Input id="email" />
      </FormControl>
      <FormControl fullWidth>
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input id="passowd" type="password" />
      </FormControl>
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          flexWrap: "wrap",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-around",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Checkbox id="rememberMe" />
          <label htmlFor="rememberMe">Remember Me</label>
        </Box>
        <Box>
          Don't have an account? <a href="#">Sign Up</a>
        </Box>
      </Box>
      <StyledButton type="submit" sx={{ width: "100%" }}>
        Login
      </StyledButton>
    </Box>
  );
};
