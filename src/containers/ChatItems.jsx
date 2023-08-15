import { Stack, Divider } from "@mui/material";
import { ChatItem } from "../components/ChatItem";
import { contacts } from "../data/contacts";

export function ChatItems() {
  return (
    <Stack spacing={1} divider={<Divider flexItem/>} sx={{padding: "10px 10px"}}>
      {contacts.map((contact) => {
        return <ChatItem key={contact.id} />;
      })}
    </Stack>
  );
}
