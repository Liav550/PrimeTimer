import {
  Box,
  Checkbox,
  CircularProgress,
  FormControl,
  Input,
  InputLabel,
} from "@mui/material";
import { StyledButton } from "./ui/Button";
import { colorPallete } from "../utils/constants";
import { useForm } from "react-hook-form";
import { Message } from "./ui/Message";
import { usePostRequest } from "../hooks/usePostRequest";
import { AxiosError } from "axios";
import type { FC } from "react";
import Cookies from "js-cookie";
interface FormFields {
  email: string;
  password: string;
}

interface LoginPageProps {
  setToken: (token: string) => void;
}

export const LoginPage: FC<LoginPageProps> = ({ setToken }) => {
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();
  const { mutateAsync } = usePostRequest("/auth/login");

  const onsubmit = async (data: FormFields) => {
    try {
      const response = await mutateAsync(data);
      console.log("Login successful:", response);

      Cookies.set("token", response.token, { path: "/" });
      setToken(response.token);
    } catch (e) {
      console.log(e);

      if (e instanceof AxiosError) {
        setError("root", {
          message: e.response?.data.message || "Login failed",
        });
      }
    }
  };

  return (
    <Box
      component={"form"}
      onSubmit={handleSubmit(onsubmit)}
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
        <Input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email address",
            },
          })}
          id="email"
        />
        {errors.email && <Message text={errors.email.message!} type="error" />}
      </FormControl>
      <FormControl fullWidth>
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input
          {...register("password", { required: "Password is required" })}
          id="password"
          type="password"
        />
        {errors.password && (
          <Message text={errors.password.message!} type="error" />
        )}
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
      <StyledButton
        type="submit"
        disabled={isSubmitting}
        sx={{ width: "100%" }}
      >
        {isSubmitting ? (
          <CircularProgress size={"1.5rem"} sx={{ color: "white" }} />
        ) : (
          "Sign In"
        )}
      </StyledButton>
      {errors.root && <Message text={errors.root.message!} type="error" />}
    </Box>
  );
};
