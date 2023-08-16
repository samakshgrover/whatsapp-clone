import { Stack, Divider } from "@mui/material";
import { ChatItem } from "../components/ChatItem";
import { contacts } from "../data/contacts";

export function ChatItems({ setSelectedContact }) {
  return (
    <Stack
      spacing={1}
      divider={<Divider flexItem />}
      sx={{ padding: "10px 10px", height: "100%", overflowY: "scroll" }}
    >
      {contacts.map((contact) => {
        // return <ChatItem key={contact.id} onClick={()=>{setSelectedContact(contact.id)}}/>;
        return (
          <ChatItem
            key={contact.id}
            contact={contact}
            setSelectedContact={setSelectedContact}
          />
        );
      })}
    </Stack>
  );
}
