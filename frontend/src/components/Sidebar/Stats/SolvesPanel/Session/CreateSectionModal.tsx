import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  Input,
  InputLabel,
  Modal,
  Tooltip,
} from "@mui/material";
import type { QueryObserverResult } from "@tanstack/react-query";
import { useState, type FC } from "react";
import { useForm } from "react-hook-form";
import { CiCirclePlus } from "react-icons/ci";
import { Message } from "../../../../ui/Message";
import { StyledButton } from "../../../../ui/Button";
import { AxiosError } from "axios";
import { usePostRequest } from "../../../../../hooks/usePostRequest";

interface CreateSectionModalProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  refetch: () => Promise<QueryObserverResult<any, Error>>;
}

interface FormFields {
  name: string;
}

export const CreateSectionModal: FC<CreateSectionModalProps> = ({
  refetch,
}) => {
  const [isOpen, setCreateSectionOpen] = useState<boolean>(false);
  const { mutateAsync } = usePostRequest("/sessions/create");

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormFields>();

  const onCreate = async (data: FormFields) => {
    try {
      await mutateAsync({ name: data.name });
      await refetch();
    } catch (error) {
      console.error("Failed to create session:", error);

      if (error instanceof AxiosError) {
        setError("root", {
          message: error.response?.data.message || "Failed to create session",
        });
      }
    }
  };

  const onClose = () => {
    setCreateSectionOpen(false);
    reset();
  };

  return (
    <>
      <Tooltip title="new session">
        <Button onClick={() => setCreateSectionOpen(true)}>
          <CiCirclePlus style={{ fontSize: "2.5rem", color: "black" }} />
        </Button>
      </Tooltip>
      <Box>
        <Modal
          open={isOpen}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          onClose={onClose}
        >
          <Box
            component={"form"}
            onSubmit={handleSubmit(onCreate)}
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              border: "2px solid #000",
              boxShadow: 24,
              p: "10px 10px 10px 10px",
              borderRadius: "10px",
            }}
          >
            <FormControl fullWidth>
              <InputLabel htmlFor="name">Section name: </InputLabel>
              <Input
                {...register("name", {
                  required: "Name is required",
                })}
                id="name"
              />
              {errors.name && (
                <Message text={errors.name.message!} type="error" />
              )}
            </FormControl>
            <StyledButton
              type="submit"
              disabled={isSubmitting}
              sx={{ width: "100%", mt: "1rem" }}
            >
              {isSubmitting ? (
                <CircularProgress size={"1.5rem"} sx={{ color: "white" }} />
              ) : (
                "Create Session"
              )}
            </StyledButton>
            {errors.root && (
              <Message text={errors.root.message!} type="error" />
            )}
            {isSubmitSuccessful && (
              <>
                <Message text="Session created successfully!" type="success" />
                <Button sx={{ width: "100%", mt: "1rem" }} onClick={onClose}>
                  Close
                </Button>
              </>
            )}
          </Box>
        </Modal>
      </Box>
    </>
  );
};
