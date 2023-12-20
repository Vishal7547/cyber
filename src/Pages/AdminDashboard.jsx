import React from "react";
import AdminMenu from "../components/AdminMenu";
import { Link } from "react-router-dom";
const AdminDashboard = () => {
  return (
    <div style={{ height: "100vh", width: "100%" }} className="bg-dark  ">
      <div className="container-fluid text-dark">
        <div className="row">
          <div className="col-md-4 ">
            <AdminMenu />
          </div>
          <div className="col-md-8 text-light">
            <div className="text-light">
              <h1>Dashboard</h1>
              <hr />
              <div className="row text-center">
                <div
                  style={{ height: "100%", width: "100%" }}
                  className="bg-dark py-5"
                >
                  <div className="container">
                    <div className="row">
                      <h1 className="text-light ">CyberSecurity Initiatives</h1>
                    </div>
                    <div className="row mt-5">
                      <div className="col-md-4 ">
                        <Link to="/secureCommunication">
                          <div className="card">
                            <img
                              src="https://cdn-icons-png.flaticon.com/512/12576/12576402.png"
                              className=" h-50 w-50 text-center m-auto mt-2"
                              alt="..."
                            />
                            <div className="card-body">
                              <h4 className="text-center">
                                SecureCommunication
                              </h4>
                              <p className="card-text p-2">
                                cryptography shields messages; authentication
                                seals trust in secure communication.
                              </p>
                            </div>
                          </div>
                        </Link>
                      </div>

                      <div className="col-md-4 my-2">
                        <Link to="/intrusionDetection">
                          <div className="card">
                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5UqmB7qh91I0eNsV9QSE5LqH0DksglYCaFw&usqp=CAU"
                              className=" h-50 w-50 text-center m-auto mt-2"
                              alt="..."
                            />
                            <div className="card-body">
                              <h4 className="text-center">
                                IntrusionDetection
                              </h4>

                              <p className="card-text p-2">
                                "Intrusion detection: Silent sentinels
                                vigilantly watch, alerting defenders to
                                trespassers in the digital realm."
                              </p>
                            </div>
                          </div>
                        </Link>
                      </div>

                      <div className="col-md-4 my-2">
                        <Link to="/dashboard">
                          <div className="card">
                            <img
                              src="data:image/jpeg;base64,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"
                              className=" h-50 w-50 text-center m-auto mt-4"
                              alt="..."
                            />
                            <div className="card-body">
                              <h4 className="text-center">Control Access</h4>
                              <p className="card-text p-3">
                                Access control: Gatekeeper of permissions,
                                granting entry only to the authorized,
                                fortifying the digital domain against
                                unwarranted intrusions
                              </p>
                            </div>
                          </div>
                        </Link>
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

export default AdminDashboard;
