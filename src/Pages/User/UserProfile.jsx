import React from "react";
import UserMenu from "../../components/UserMenu";
import user from "../../Images/yash.jpeg";
const UserProfile = () => {
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
              <h1>Profile</h1>
              <hr />
              <div className="row ">
                <div className="col-md-2">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt=""
                    height={100}
                    width={100}
                  />
                </div>
                <div className="col-md-8">
                  <p>
                    <b>Name 🧑‍🦲 Sagar Jha</b>
                  </p>
                  <p>
                    <b>Contact No 📞 9798517945</b>
                  </p>
                  <p>
                    <b>Email📧: vishalk80269@gmail.com</b>
                  </p>
                  <p>
                    <b>Address:Purnea college of engineering Purnea</b>
                  </p>
                  <div className="btn btn-primary">Update Profile</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
