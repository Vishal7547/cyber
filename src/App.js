import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Home from "./Pages/Home";
import SecureCommunication from "./components/SecureCommunication";
import IntrusionDetection from "./components/IntrusionDetection";
import Auth from "./components/Auth";
import Dashboard from "./components/Dashboard";
import { Navigate } from "react-router-dom";
import Pid from "./Pages/Pid";
import UserDashboard from "./Pages/User/UserDashboard";
import Report from "./Pages/User/Report";
import Power from "./Pages/User/Power";
import Setting from "./Pages/User/Setting";
import UserProfile from "./Pages/User/UserProfile";

import AdminDashboard from "./Pages/AdminDashboard";
import AdminReport from "./Pages/AdminReport";
import Admin from "./Pages/Admin";
function App() {
  const [encryptedMessage, setEncryptedMessage] = useState("");
  const [userRole, setUserRole] = useState("user");
  const PrivateRoute = ({ children }) => {
    return userRole === "admin" ? children : <Navigate to="/auth" />;
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Header userRole={userRole} setUserRole={setUserRole} />
        <Routes>
          <Route
            path="/"
            element={
              <Home userRole={userRole} onUserRoleChange={setUserRole} />
            }
          />

          {/* <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard isAdmin={userRole} />
              </PrivateRoute>
            }
          /> */}
          <Route
            path="/pid"
            element={
              <PrivateRoute>
                <Pid />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <Admin />
              </PrivateRoute>
            }
          />

          <Route
            path="/auth"
            element={
              <Auth userRole={userRole} onUserRoleChange={setUserRole} />
            }
          />

          <Route path="/dashboard/user" element={<UserDashboard />} />
          <Route path="/dashboard/report" element={<Report />} />
          <Route path="/dashboard/power" element={<Power />} />
          <Route path="/dashboard/setting" element={<Setting />} />
          <Route path="/dashboard/profile" element={<UserProfile />} />
          <Route path="/dashboard/admin" element={<AdminDashboard />} />

          <Route
            path="/secureCommunication"
            element={
              <PrivateRoute>
                <SecureCommunication
                  encryptedMessage={encryptedMessage}
                  setEncryptedMessage={setEncryptedMessage}
                />
              </PrivateRoute>
            }
          />
          <Route
            path="/intrusionDetection"
            element={
              <PrivateRoute>
                <IntrusionDetection encryptedMessage={encryptedMessage} />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
