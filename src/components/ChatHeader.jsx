import { AppBar, Avatar, Toolbar } from "@mui/material";
import avatar from "../assets/avatar1.jpg";

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
          <Avatar src={avatar}></Avatar>
        </Toolbar>
      </AppBar>
    </>
  );
}
