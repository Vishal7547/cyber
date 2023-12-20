import React from "react";
import UserMenu from "../../components/UserMenu";

const Power = () => {
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
              <h1>Manage Power</h1>
              <hr />
              <div className="row ">
                <p>
                  <b>Total Energy uses This Month: 736W</b>
                </p>
                <h3>Energy Distribution</h3>
                <hr />
                <div className="row">
                  <div className="col-md-4">
                    <div className="row">
                      <div className="col-md-6">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                          alt=""
                          height={100}
                          width={100}
                        />
                      </div>
                      <div className="col-md-6">
                        <p>
                          <b>🧑‍🦲 Sagar Jha</b>
                        </p>
                        <p>
                          <b> 📞 9798517945</b>
                        </p>
                        <p>
                          <b>Limit:1000KW/H</b>
                        </p>
                        <div className="btn btn-danger">Power Cut</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="row">
                      <div className="col-md-6">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                          alt=""
                          height={100}
                          width={100}
                        />
                      </div>
                      <div className="col-md-6">
                        <p>
                          <b> Kumar Shanu Jha</b>
                        </p>
                        <p>
                          <b> 📞 9798517945</b>
                        </p>
                        <p>
                          <b>Limit:1000KW/H</b>
                        </p>
                        <div className="btn btn-danger">Power Cut</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="row">
                      <div className="col-md-6">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                          alt=""
                          height={100}
                          width={100}
                        />
                      </div>
                      <div className="col-md-6 text-justify">
                        <p>
                          <b> Yash Choudhary</b>
                        </p>
                        <p>
                          <b> 📞 9798517945</b>
                        </p>
                        <p>
                          <b>Limit:1000KW/H</b>
                        </p>
                        <div className="btn btn-danger">Power Cut</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Power;
