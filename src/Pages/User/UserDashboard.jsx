import React from "react";
import UserMenu from "../../components/UserMenu";
const UserDashboard = () => {
  return (
    <div style={{ height: "100vh", width: "100%" }} className="bg-dark  ">
      <div className="container-fluid text-dark">
        <div className="row">
          <div className="col-md-4 ">
            <UserMenu />
          </div>
          <div className="col-md-8 text-light">
            <div className="text-light">
              <h1>Dashboard</h1>
              <hr />
              <div className="row text-center">
                <p>
                  <b>Total Recharge Left: 💲 736</b>
                </p>
                <p>
                  <b>Today Uses :100W</b>
                </p>
                <p>
                  <b>Last Paid Bill:2 September</b>
                </p>
                <p>
                  <b>Package:💲3000</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
