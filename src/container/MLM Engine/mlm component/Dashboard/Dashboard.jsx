import { Typography } from "@mui/material";
import React from "react";
import PageTop from "../common/PageTop";
import GroupsIcon from "@mui/icons-material/Groups";
import BarChartIcon from "@mui/icons-material/BarChart";
import NewTable from "../common/Table";
import PendingApproval from "./PendingApproval/PendingApproval";
import Inventry from "./Inventory Status/InventoryStatus";
const Dashboard = () => {
  return (
    <div className="w-full overflow-y-scroll overflow-auto h-screen">
      <PageTop name={"DashBoard"} />
      <div className=" w-auto h-auto flex flex-col items-center">
        {/* Sale Report Div  */}
        <div className="w-full flex py-4 gap-14 items-center justify-center uppercase flex-wrap rounded-t-lg mb-12">
          <div className="flex shadow-xl flex-col py-4 px-6 items-center border-[1px] border-gray-400 border-solid rounded-lg">
            <div>
              <Typography variant="h6">New Sellers</Typography>
            </div>
            <div className="flex w-full gap-6">
              <GroupsIcon className="muiIcon" />
              <div>
                <Typography variant="subtitle2">This Month</Typography>
                <Typography variant="h6">436.00</Typography>
              </div>
            </div>
          </div>
          <div className="flex shadow-xl flex-col py-4 px-6 items-center border-[1px] border-gray-400 border-solid rounded-lg">
            <div>
              <Typography variant="h6">Monthly Sales</Typography>
            </div>
            <div className="flex w-full gap-6">
              <BarChartIcon className="muiIcon" />
              <div>
                <Typography variant="subtitle2">USd</Typography>
                <Typography variant="h6">390.00</Typography>
              </div>
            </div>
          </div>{" "}
          <div className="flex shadow-xl flex-col py-4 px-6 items-center border-[1px] border-gray-400 border-solid rounded-lg">
            <div>
              <Typography variant="h6">Weekly Sales</Typography>
            </div>
            <div className="flex w-full gap-6">
              <BarChartIcon className="muiIcon" />
              <div>
                <Typography variant="subtitle2">Usd</Typography>
                <Typography variant="h6">436.00</Typography>
              </div>
            </div>
          </div>{" "}
          <div className="flex shadow-xl flex-col py-4 px-6 items-center border-[1px] border-gray-400 border-solid rounded-lg">
            <div>
              <Typography variant="h6">Total Sales</Typography>
            </div>
            <div className="flex w-full gap-6">
              <BarChartIcon className="muiIcon" />
              <div>
                <Typography variant="subtitle2">usd</Typography>
                <Typography variant="h6">436.00</Typography>
              </div>
            </div>
          </div>
        </div>
        {/* Sale Report Div End */}
        {/* <div>
          <NewTable />
        </div>
        <div>
          <NewTable />
        </div> */}
        <div className="flex w-full  h-auto">
          <PendingApproval />
          <Inventry />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
