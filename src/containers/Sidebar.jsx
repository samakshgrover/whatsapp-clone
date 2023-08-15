import { Stack } from "@mui/material";
import { SidebarHeader } from "../components/SidebarHeader";
import { ChatItems } from "./ChatItems";
import { Searchbar } from "../components/Searchbar";

export function Sidebar() {
  return (
    <Stack sx={{height:'100vh'}}>
      <SidebarHeader />
      <Searchbar />
      <ChatItems/>
    </Stack>
  );
}
