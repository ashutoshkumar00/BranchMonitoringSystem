import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setAdminName, setAuthData } from "../../components/BranchSlice/BranchSlice";
import "./LoginForm.css";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setAdminName(username));
    const data = {
      name: username,
      password: password,
    };

    try {
      const response = await axios.post("http://localhost:8080/admin/authenticate", data); //call authenticator to get token
      const role = response.data.Role;
      dispatch(setAuthData(response.data))
      console.log(response.data)
      if (role === "admin") {
        console.log("in admin")
        navigate("/admin"); // route to head-admin page
      } else if (role === "manager") {
        navigate(`/layout`); // route to branch admin page
      }
      //setSuccess(true);
    } catch (error) {
      alert("Invalid credentials");
      //setSuccess(false);
    }

    setUsername("");
    setPassword("");
  };

  return (

   <div className="lcontainer">
          <div className="login-box">
            <h2>Admin-Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  type="text"
                  id="username"
                  placeholder="Username"
                  value={username}
                  onChange={handleUsernameChange}
                  required
                />
              </div>
              <div className="input-group">
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
  );
};

export default LoginForm;
