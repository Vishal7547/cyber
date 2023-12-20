import React from "react";
import { NavLink } from "react-router-dom";

const UserMenu = () => {
  return (
    <div>
      <div className="text-center ">
        <div className="list-group h-100">
          <h4>User Dashboard</h4>
          <NavLink
            to="/dashboard/user"
            className="list-group-item list-group-item-action text-dark"
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/dashboard/report"
            className="list-group-item list-group-item-action text-dark"
          >
            Report
          </NavLink>
          <NavLink
            to="/dashboard/power"
            className="list-group-item list-group-item-action text-dark"
          >
            Manage Power
          </NavLink>
          <NavLink
            to="/dashboard/profile"
            className="list-group-item list-group-item-action text-dark"
          >
            Profile
          </NavLink>
          <NavLink
            to="/dashboard/setting"
            className="list-group-item list-group-item-action text-dark"
          >
            Setting
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
