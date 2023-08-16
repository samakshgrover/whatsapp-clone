import { Stack } from "@mui/material";
import { SidebarHeader } from "../components/SidebarHeader";
import { ChatItems } from "./ChatItems";
import { Searchbar } from "../components/Searchbar";

export function Sidebar({setSelectedContact}) {
  return (
    <Stack sx={{height:'100vh', border:'1px solid rgba(17,27,33,.06)'}}>
      <SidebarHeader />
      <Searchbar />
      <ChatItems setSelectedContact={setSelectedContact}/>
    </Stack>
  );
}
