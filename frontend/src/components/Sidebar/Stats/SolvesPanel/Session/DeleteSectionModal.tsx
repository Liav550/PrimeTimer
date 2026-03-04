import { Box, Button, Modal, Tooltip, Typography } from "@mui/material";
import { useState, type FC } from "react";
import { CiTrash } from "react-icons/ci";
import { colorPallete } from "../../../../../utils/constants";
import { useDeleteRequest } from "../../../../../hooks/useDeleteRequest";
import { useTimer } from "../../../../../contexts/timer/useTimer";
import type { QueryObserverResult } from "@tanstack/react-query";

interface DeleteSectionModalProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  refetch: () => Promise<QueryObserverResult<any, Error>>;
}

export const DeleteSectionModal: FC<DeleteSectionModalProps> = ({
  refetch,
}) => {
  const [isOpen, setDeleteSectionOpen] = useState<boolean>(false);
  const { currentSession } = useTimer();
  const { mutateAsync } = useDeleteRequest(
    `/sessions/delete/${currentSession}`,
  );

  const onDelete = async () => {
    try {
      await mutateAsync();

      setDeleteSectionOpen(false);

      await refetch();
    } catch (error) {
      console.error("Failed to delete session:", error);
    }
  };

  return (
    <>
      <Tooltip title="delete session">
        <Button onClick={() => setDeleteSectionOpen(true)}>
          <CiTrash style={{ fontSize: "2.5rem", color: "black" }} />
        </Button>
      </Tooltip>
      <Box>
        <Modal
          open={isOpen}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          onClose={() => setDeleteSectionOpen(false)}
        >
          <Box
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
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Do you want to delete this session?
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              All solves in this session will be deleted as well. <br />
              This action cannot be undone.
            </Typography>
            <Typography
              sx={{ mt: 2, display: "flex", flexDirection: "row-reverse" }}
            >
              <Button
                sx={{
                  backgroundColor: colorPallete.accent,
                  color: "white",
                  ml: 1,
                }}
                onClick={() => setDeleteSectionOpen(false)}
                variant="contained"
              >
                Cancel
              </Button>
              <Button onClick={onDelete} variant="contained" color="error">
                Delete
              </Button>
            </Typography>
          </Box>
        </Modal>
      </Box>
    </>
  );
};
