import { Stack } from "@mui/material";
import { SidebarHeader } from "../components/SidebarHeader";
import { ChatItems } from "./ChatItems";

export function Sidebar() {
  return (
    <Stack sx={{height:'100vh'}}>
      <SidebarHeader />
      <ChatItems/>
    </Stack>
  );
}
