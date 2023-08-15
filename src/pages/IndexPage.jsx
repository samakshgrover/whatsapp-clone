import { Grid } from "@mui/material";
export default function IndexPage(){
  return (
    <Grid container sx={{padding:0, margin:0, height:'100vh', border: '1px solid red'}}>
      {/* <ChatList/> .[ <ChatListItem /> ...] */}
      <Grid item xs={4} sx={{padding:0, border:"1px solid", height:'100%'}}>Left</Grid>
      
      {/* ChatWindow */}
      <Grid item xs={8} sx={{border:"1px solid", height:'100%'}}>Center</Grid>
    </Grid>
  )
}