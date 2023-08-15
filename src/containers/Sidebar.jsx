import { Box } from "@mui/material";
import { Header } from "../components/SidebarHeader";
// import { ChatItem } from "../components/ChatItem";
import { ChatItems } from "./ChatItems";

export function Sidebar() {
  return (
    <Box>
      <Header />
      <ChatItems />
    </Box>
  );
}
