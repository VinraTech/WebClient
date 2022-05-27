import { Button, Typography } from "@mui/material";
import React from "react";
import rows from "./rows.json";
import { InventoryStatus } from "./column";
import { DataGrid } from "@mui/x-data-grid";

const Inventry = () => {
  return (
    <div style={{ width: "100%", height: "250px",display:"block" }} className=" px-3">
      <div className="w-full py-2 flex justify-between border-b bg-slate-300 px-3 items-center  text-gray-700">
        <h3 className="font-semibold text_color">Inventory Status</h3>
        <Button
          variant="contained"
          color="info"
          sx={{ borderRadius: "50rem", backgroundColor: " #dbb060" }}
        >
          <span> View All</span>
        </Button>
      </div>
      <DataGrid columns={InventoryStatus} rows={rows} autoHeight={true} />
    </div>
  );
};

export default Inventry;
