import { Grid } from "@mui/material";
import { Sidebar } from "../containers/Sidebar";
export default function IndexPage() {
  return (
    <Grid container sx={{ padding: 0, margin: 0, height: "100vh" }}>
      {/* <ChatList/> .[ <ChatListItem /> ...] */}
      <Grid item xs={3} sx={{ padding: 0, height: "100%" }}>
        <Sidebar />
      </Grid>

      {/* ChatWindow */}
      <Grid item xs={9} sx={{ height: "100%" }}>
        Center
      </Grid>
    </Grid>
  );
}
