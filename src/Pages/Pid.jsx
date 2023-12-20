import React from "react";
import Swal from "sweetalert2";
import { useState } from "react";
const Pid = () => {
  const [kp, setKp] = useState("");
  const [ki, setKi] = useState("");
  const [kd, setKd] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (kp < 1 && kp > 2) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "KP value should between 1 to 2",
      });
      return;
    } else if (ki < 1 && ki > 2) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "KI value should between 1 to 2",
      });
      return;
    } else if (kd < 1 && kd > 2) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "KD value should between 1 to 2",
      });
      return;
    }
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Request is Accepted",
    });
    return;
  };
  return (
    <>
      <div
        style={{ height: "100%", width: "100%" }}
        className=" container bg-dark py-5"
      >
        <div className="row d-flex justify-content-center align-item-center flex-column text-light">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label for="kp" className="form-label">
                KP
              </label>
              <input
                type="number"
                className="form-control"
                id="kp"
                value={kp}
                onChange={(e) => setKp(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label for="ki" className="form-label">
                KI
              </label>
              <input
                type="number"
                className="form-control"
                id="ki"
                value={ki}
                onChange={(e) => setKi(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label for="kd" className="form-label">
                KD
              </label>
              <input
                type="number"
                className="form-control"
                id="kd"
                value={kd}
                onChange={(e) => setKd(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Pid;
