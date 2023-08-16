import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { Sidebar } from "../containers/Sidebar";
import { WhatsappInfoScreen } from "../containers/WhatsappInfoScreen";
import { ChatScreen } from "../containers/ChatScreen";

export default function IndexPage() {
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    document.addEventListener("keydown", (evt) => {
      let isEscape = false;
      isEscape = evt.key === "Escape";

      if (isEscape) {
        setSelectedContact(null);
      }
    });
  }, []);
  return (
    <Grid container sx={{ padding: 0, margin: 0, height: "100vh" }}>
      <Grid item xs={3.5} sx={{ padding: 0, height: "100%" }}>
        <Sidebar setSelectedContact={setSelectedContact} />
      </Grid>
      <Grid item xs={8.5} sx={{ height: "100%" }}>
        {selectedContact ? <ChatScreen /> : <WhatsappInfoScreen />}
      </Grid>
    </Grid>
  );
}
