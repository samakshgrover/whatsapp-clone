import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { FilterIcon } from "./icons/icons";
import { Box } from "@mui/material";

export function Searchbar() {
  return (
    <Paper
      elevation={0}
      sx={{ p: "5px 10px", display: "flex", alignItems: "center" }}
    >
      <Box sx={{ background: "#f0f2f5", flex: 1, display: "flex", borderRadius:'8px' }}>
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Google Maps"
          inputProps={{ "aria-label": "search google maps" }}
        />
      </Box>

      <IconButton sx={{ p: "10px", color: "#8696a0" }} aria-label="directions">
        <FilterIcon />
      </IconButton>
    </Paper>
  );
}
