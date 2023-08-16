import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import { EmojiIcon, MicIcon, PlusIcon } from "./icons/icons";
import { Box } from "@mui/material";

export function Inputbar() {
  return (
    <Paper
      elevation={0}
      sx={{
        p: "5px 10px",
        display: "flex",
        alignItems: "center",
        background: "#f0f2f5",
      }}
    >
      <IconButton type="button" sx={{ p: "10px", color:'#54656f', fontSize:'13.333px' }}>
        <EmojiIcon />
      </IconButton>
      <IconButton type="button" sx={{ p: "10px", color:'#54656f', fontSize:'13.333px' }}>
        <PlusIcon />
      </IconButton>
      <Box sx={{ background: "#fff", flex: 1, display: "flex", borderRadius:'8px', padding:'5px' }}>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Type a message"
          inputProps={{ "aria-label": "Type a message" }}
        />
      </Box>

      <IconButton sx={{ p: "10px", color:'#54656f', fontSize:'13.333px' }} aria-label="directions">
        <MicIcon />
      </IconButton>
    </Paper>
  );
}
