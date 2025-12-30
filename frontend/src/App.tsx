import { Box } from "@mui/material";
import { LoginPage } from "./components/LoginPage";
import { colorPallete } from "./utils/constants";

export const App = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colorPallete.primary,
      }}
    >
      {" "}
      <LoginPage />
    </Box>
  );
};
