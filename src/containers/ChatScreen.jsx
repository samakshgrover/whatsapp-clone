import { Stack } from "@mui/material";
import { ChatHeader } from "../components/ChatHeader";
import { ChatBody } from "../components/ChatBody";
import { Inputbar } from "../components/ChatInput";

export function ChatScreen() {
  return (
    <Stack sx={{ height: "100%" }}>
      <ChatHeader />
      <ChatBody />
      <Inputbar />
    </Stack>
  );
}
