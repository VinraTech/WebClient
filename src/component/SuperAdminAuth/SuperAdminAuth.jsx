import {
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  TextField,
} from "@mui/material";
import { InputAdornment } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SuperAdminAuth = () => {
  const Navigate = useNavigate();
  // handle Navigate Submit
  const handleNavigate = () => {
    Navigate("/mainDashBoard");
  };
  const [PasswordState, setPasswordState] = useState("password");
  const handleState = () => {
    setPasswordState(PasswordState === "password" ? "text" : "password");
  };
  return (
    <div className="w-full h-screen grid place-items-center">
      <div className="w-[360px] aspect-square flex flex-col items-center  gap-6 p-4 justify-center shadow-lg bg-gray-300 rounded-sm">
        <div>
          <h3 className="text-gray-900 text-2xl font-semibold">Super Admin</h3>
        </div>
        <form className="flex flex-col gap-4 ">
          <TextField type="email" label="Email Address" />
          <TextField
            type={PasswordState}
            label="Password"
            helperText="Do not Share your Password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <IconButton onClick={handleState}>
                    {PasswordState === "password" ? (
                      <VisibilityIcon />
                    ) : (
                      <VisibilityOffIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <FormControlLabel label="Remember Me" control={<Checkbox />} />
          <Button
            type="submit"
            color="info"
            variant="contained"
            className="mt-3 ButtonColor"
            onClick={handleNavigate}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SuperAdminAuth;
