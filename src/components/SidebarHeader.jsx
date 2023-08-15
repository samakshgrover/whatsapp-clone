import { AppBar, Toolbar } from "@mui/material";

export function SidebarHeader(){
  return <>
    <AppBar id="abcd" position="static" sx={{padding:0, margin:0}}>
      <Toolbar sx={{padding:0, margin:0}}>Header</Toolbar>
    </AppBar>
  </>
}