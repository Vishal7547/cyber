import React from "react";
import AdminMenu from "../components/AdminMenu";
import Dashboard from "../components/Dashboard";

const Admin = () => {
  return (
    <div>
      <div style={{ height: "100vh", width: "100%" }} className="bg-dark  ">
        <div className="container-fluid text-dark">
          <div className="row">
            <div className="col-md-4 ">
              <AdminMenu />
            </div>
            <div className="col-md-8 text-light">
              <div className="text-light">
                <h1>Report</h1>
                <hr />
                <div className="row">
                  <Dashboard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
