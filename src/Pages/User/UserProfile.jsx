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
                    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
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
                    <b>Email📧: sagar@gmail.com</b>
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
