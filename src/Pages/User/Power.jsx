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
                          src="data:image/jpeg;base64,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"
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
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="row">
                      <div className="col-md-6">
                        <img
                          src="https://akm-img-a-in.tosshub.com/indiatoday/images/photogallery/201702/4_020317024650.jpg?VersionId=_BvAqZbH7Km.i43SMaW9KhufL1Ut4Ms0&size=686:*"
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
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="row">
                      <div className="col-md-6">
                        <img
                          src="data:image/jpeg;base64,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"
                          alt=""
                          height={100}
                          width={100}
                        />
                      </div>
                      <div className="col-md-6">
                        <p>
                          <b> Yash Choudhary</b>
                        </p>
                        <p>
                          <b> 📞 9798517945</b>
                        </p>
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
