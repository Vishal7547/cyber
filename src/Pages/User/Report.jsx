import React from "react";
import UserMenu from "../../components/UserMenu";
import Graph from "../../components/Bar";

const Report = () => {
  return (
    <div style={{ height: "100vh", width: "100%" }} className="bg-dark  ">
      <div className="container-fluid text-dark">
        <div className="row">
          <div className="col-md-4 ">
            <UserMenu />
          </div>
          <div className="col-md-8 text-light">
            {" "}
            <div className="text-light">
              <h1>Report</h1>
              <hr />
              <div className="row ">
                <div className="col-md-6">
                  <h1> Weekly report</h1>
                  <Graph />
                </div>
                <div className="col-md-6">
                  <h1>Monthly report</h1>
                  <Graph />
                </div>
              </div>
              <div className="row ">
                <div className="col-md-6">
                  <h1>Yearly Report</h1>
                  <Graph />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
