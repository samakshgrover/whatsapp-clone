import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import avatar from "../assets/avatar1.jpg";
import { SearchIcon } from "./icons/icons";
import { ChatMenu } from "./ChatMenu";

export function ChatHeader() {
  return (
    <>
      <AppBar
        color="transparent"
        elevation={0}
        position="static"
        sx={{ padding: 0, margin: 0, background: "#f0f2f5" }}
      >
        <Toolbar sx={{ padding: 0, margin: 0 }}>
          <Stack direction={"row"} sx={{ width: "100%" }}>
            <Box sx={{ paddingLeft: "20px" }}>
              <Avatar src={avatar}></Avatar>
            </Box>
            <Stack ml={2} sx={{ flexGrow: 1 }}>
              <Typography>{`Niranjan`}</Typography>
              <Typography
                sx={{ color: "var(--secondary-color)", fontSize: "12px" }}
              >{`Last seen today at 10:08 pm`}</Typography>
            </Stack>
            <Stack direction={"row"}>
              <IconButton>
                <SearchIcon />
              </IconButton>
              <ChatMenu />
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
}
