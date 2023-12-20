import React from "react";
import UserMenu from "../../components/UserMenu";

const Setting = () => {
  return (
    <div style={{ height: "100vh", width: "100%" }} className="bg-dark  ">
      <div className="container-fluid text-dark">
        <div className="row">
          <div className="col-md-4 ">
            <UserMenu />
          </div>
          <div className="col-md-8 text-light">
            <div className="text-light">
              <h1>Setting</h1>
              <hr />
              <div className="row text-justify">
                <p>🟥Change Password</p>
                <p>🟥 Language</p>
                <p>🟥 Faq</p>
                <p>🟥 Private</p>
                <p>🟥 Policy</p>
                <p>🟥 contact</p>
                <p>🟥 Logout</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
