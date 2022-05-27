import {
  Avatar,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SettingsIcon from "@mui/icons-material/Settings";
import Modal from "../../../../Asset/modal.png";
import SearchIcon from '@mui/icons-material/Search';

const PageTop = ({name}) => {
  return (
    <div className="w-full flex py-6 items-center justify-around mb-8">
      <Typography variant="h6">{name}</Typography>
      <div className="flex w-1/4 items-center ">
        <div className="mx-10">
          <TextField
             
            placeholder="Search"
            variant="outlined"
            size="small"
            InputProps={{endAdornment:<InputAdornment><SearchIcon></SearchIcon></InputAdornment>}}
           
          />
        </div>

        <div className="mr-5">
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
        <div className="flex items-center gap-1">
          <Avatar>
            <img src={Modal}></img>
          </Avatar>
          <IconButton>
            <KeyboardArrowDownIcon />   
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default PageTop;
