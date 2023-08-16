/* eslint-disable react/prop-types */
import { Avatar, Box } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
// import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
// import { styled } from "@mui/material/styles";

export function ChatItem({ contact, setSelectedContact }) {
  return (
    <Stack
      direction="row"
      spacing={2}
      onClick={() => {
        setSelectedContact(contact.id);
      }}
    >
      <Box>
        <Avatar sx={{ bgcolor: deepPurple[500] }}>{contact.proficePic}</Avatar>
      </Box>

      <Stack sx={{ flex: 1 }}>
        <Box>{contact.name}</Box>
        <Box sx={{ color: "var(--secondary-color)", fontSize: "14px" }}>
          {contact.lastMessage}
        </Box>
      </Stack>

      <Box sx={{ color: "var(--secondary-color)", fontSize: "14px" }}>
        {contact.time}
      </Box>
    </Stack>
  );
}
