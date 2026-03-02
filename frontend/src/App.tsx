import { Box } from "@mui/material";
import { LoginPage } from "../src/views/LoginPage";
import { colorPallete } from "./utils/constants";
import { useState } from "react";
import { TimerPage } from "../src/views/TimerPage";
import Cookies from "js-cookie";

export const App = () => {
  const [token, setToken] = useState<string | null>(
    Cookies.get("token") || null
  );

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: token ? "normal" : "center",
        backgroundColor: colorPallete.primary,
      }}
    >
      {token ? <TimerPage /> : <LoginPage setToken={setToken} />}
    </Box>
  );
};
