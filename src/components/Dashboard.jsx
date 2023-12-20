import React from "react";
import { useNavigate } from "react-router-dom";
const Dashboard = ({ isAdmin }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{ height: "90vh", width: "100%" }}
      className="bg-dark d-flex justify-content-center align-items-center flex-column"
    >
      <h2 className="text-light mt-2">Microgrid Configuration</h2>
      <button onClick={() => navigate("/pid")} className="my-3">
        Modify PID Settings
      </button>
      <button>Modify Battery Settings</button>
    </div>
  );
};

export default Dashboard;
