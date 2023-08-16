import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { FilterIcon } from "./icons/icons";
import { Box } from "@mui/material";
import { customColors } from "../constants";

export function Searchbar() {
  return (
    <Paper
      elevation={0}
      sx={{ p: "5px 10px", display: "flex", alignItems: "center" }}
    >
      <Box
        sx={{
          background: customColors.color1,
          flex: 1,
          display: "flex",
          borderRadius: "8px",
        }}
      >
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{
            ml: 1,
            flex: 1,
            "& input::placeholder": {
              color: "black",
              fontSize: "14px",
          }
          }}
          placeholder="Search or start new chat"
          inputProps={{ "aria-label": "search chat" }}
        />
      </Box>

      <IconButton sx={{ p: "10px", color: customColors.icon }}>
        <FilterIcon />
      </IconButton>
    </Paper>
  );
}
