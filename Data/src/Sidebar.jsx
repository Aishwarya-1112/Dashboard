import React from "react";
import SpeedIcon from "@mui/icons-material/Speed";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Groups2Icon from "@mui/icons-material/Groups2";
import PersonIcon from "@mui/icons-material/Person";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import { Typography } from "@mui/material";

const Sidebar = () => {
  return (
    <div className="bg-gray-200 text-gray-900 h-screen px-6 py-5 mx-2 my-4 fixed w-16 md:w-64 border-r border-gray-300 top-0">
      <div className="text-3xl  space-x-4 font-bolder hidden md:block  ">
        AISH Shop
      </div>
      <ul className="flex flex-col mt5 text-xl">
        <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer">
          <SpeedIcon className="mx-3" />
          <span>Dashboard</span>
        </li>
        <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer">
          <ShoppingCartIcon className="mx-3" />
          <span>Orders</span>
        </li>
        <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer">
          <Groups2Icon className="mx-3" />
          <span>Customer</span>
        </li>
        <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer">
          <PersonIcon className="mx-3" />
          <span>User</span>
        </li>
        <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer">
          <Inventory2Icon className="mx-3" />
          <span>Product</span>
        </li>
        <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer">
          <SettingsSuggestIcon className="mx-3" />
          <span>Setting</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
