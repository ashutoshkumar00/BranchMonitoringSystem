import React from "react";
import "./App.css";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Adminpage from "./Adminpage";
import LoginForm from "./pages/Login/LoginForm";
import Home from "./pages/Home/Home";
import Branchalytics from "./pages/Branchalytics/Branchalytics";
import Feedback from "./pages/Feedback/Feedback";
import Service_requests from "./pages/Service_requests/Service_requests";
import Structure from "./Structure";

const App = () => {
  return (
    <Routers>
      <Routes>
        <Route path="/" element={<Structure />}>
          <Route path="layout/*" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="branchalytics" element={<Branchalytics />} />
            <Route path="service_requests" element={<Service_requests />} />
            <Route path="feedback" element={<Feedback />} />
          </Route>
          <Route path="/admin" element={<Adminpage />} />
          <Route path="/signin" element={<LoginForm />} />s
        </Route>
      </Routes>
    </Routers>
  );
};

export default App;
