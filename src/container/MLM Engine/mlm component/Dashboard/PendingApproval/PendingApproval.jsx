import { Button, Typography } from "@mui/material";
import React from "react";
import rows from "./pendingrow.json";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
const col = [
  {
    field: "name",
    headername: "Name",
    width: 130,
  },
  {
    field: "address",
    headername: "Address",
    width: 200,
  },
  {
    field: "email",
    headername: "Email",
    width: 150,
  },
  {
    field: "phone",
    headername: "Contact No",
    width: 150,
  },
];
const PendingApproval = () => {
  const Navigate = useNavigate();
  const handleNavigation = () => {
    Navigate("approvalpending");
  };
  return (
    <div
      style={{ width: "50%", height: "250px", display: "block" }}
      className=" px-3"
    >
      <div className="w-full py-2 bg-slate-300 flex justify-between border-b px-3 items-center rounded-t-lg text-gray-700">
        <h3 className="font-semibold text_color">Approval Pending</h3>
        <Button
          variant="contained"
          color="info"
          sx={{ borderRadius: "50rem", backgroundColor: " #dbb060" }}
          onClick={handleNavigation}
        >
          <span> View All</span>
        </Button>
      </div>
      <DataGrid columns={col} rows={rows} autoHeight={true} />
    </div>
  );
};

export default PendingApproval;
