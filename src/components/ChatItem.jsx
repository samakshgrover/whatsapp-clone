import { Avatar, Box } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
// import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
// import { styled } from "@mui/material/styles";

export function ChatItem() {
  return (
    <Stack direction="row" spacing={2}>
      <ChatItemProfilePic />
      <ContactName />
      <TimeComponent />
    </Stack>
  );
}

function ChatItemProfilePic() {
  return (
    <Box>
      <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
    </Box>
  );
}

function ContactName() {
  return (
    <Stack sx={{ flex: 1 }}>
      <Box>Niranjan</Box>
      <Box>last message</Box>
    </Stack>
  );
}

function TimeComponent() {
  return <div>8:53 Pm</div>;
}
