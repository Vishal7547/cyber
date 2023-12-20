import React from "react";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <div>
      <div className="text-center ">
        <div className="list-group h-100">
          <h4>User Dashboard</h4>
          <NavLink
            to="/dashboard/admin"
            className="list-group-item list-group-item-action text-dark"
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/dashboard/admin/report"
            className="list-group-item list-group-item-action text-dark"
          >
            Report
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default AdminMenu;
