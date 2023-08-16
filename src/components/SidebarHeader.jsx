import { AppBar, Avatar, ButtonGroup, Toolbar } from "@mui/material";
import avatar from "../assets/avatar1.jpg";
import {
  CommunitiesIcon,
  NewChatIcon,
  StatusIcon,
} from "./icons/icons";
import { SidbarMenu } from "./SidebarMenu";

export function SidebarHeader() {
  return (
    <>
      <AppBar
        color="transparent"
        elevation={0}
        position="static"
        sx={{
          padding: 0,
          margin: 0,
          background: "#f0f2f5",
          borderRightWidth: "1px",
          borderRightColor: "#111b210f",
          borderRightStyle: "solid",
        }}
      >
        <Toolbar sx={{ padding: 0, margin: 0 }}>
          <Avatar src={avatar}></Avatar>
          <HeaderIcons />
        </Toolbar>
      </AppBar>
    </>
  );
}

function HeaderIcons() {
  return (
    <ButtonGroup
      sx={{
        color: "#54656f",
        flexGrow: 1,
        justifyContent: "flex-end",
        gap: "15px",
      }}
    >
      <CommunitiesIcon />
      <StatusIcon />
      <NewChatIcon />
      <SidbarMenu/>
    </ButtonGroup>
  );
}
