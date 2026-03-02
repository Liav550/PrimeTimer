import { Box, Button, Tooltip } from "@mui/material";
import {
  IoSettingsOutline,
  IoShareOutline,
  IoCopyOutline,
} from "react-icons/io5";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { RxTrackNext } from "react-icons/rx";
import { InfoScreen } from "./InfoScreen";
import { useScramble } from "../../../contexts/scramble/useScramble";
import { useEvent } from "../../../contexts/event/useEvent";

export const Operations = () => {
  const { generateRandomScramble, scramble } = useScramble();
  const { event } = useEvent();

  const copyScramble = () => {
    navigator.clipboard.writeText(scramble);
  };

  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        sx={{ paddingTop: 1 }}
      >
        <Tooltip title="settings">
          <Button sx={{ flexGrow: 1 }}>
            <IoSettingsOutline style={{ fontSize: "2.5rem", color: "black" }} />
          </Button>
        </Tooltip>
        <Tooltip title="Who are we?">
          <Button sx={{ flexGrow: 1 }}>
            <AiOutlineQuestionCircle
              style={{ fontSize: "2.5rem", color: "black" }}
            />
          </Button>
        </Tooltip>
        <Tooltip title="export">
          <Button sx={{ flexGrow: 1 }}>
            <IoShareOutline style={{ fontSize: "2.5rem", color: "black" }} />
          </Button>
        </Tooltip>
      </Box>
      <InfoScreen />
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        sx={{ paddingTop: 1 }}
      >
        <Tooltip title="copy scramble">
          <Button sx={{ flexGrow: 1 }} onClick={copyScramble}>
            <IoCopyOutline style={{ fontSize: "2.5rem", color: "black" }} />
          </Button>
        </Tooltip>
        <Tooltip title="next scramble">
          <Button
            sx={{ flexGrow: 1 }}
            onClick={() => generateRandomScramble(event)}
          >
            <RxTrackNext style={{ fontSize: "2.5rem", color: "black" }} />
          </Button>
        </Tooltip>
      </Box>
    </>
  );
};
