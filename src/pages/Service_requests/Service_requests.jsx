import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios
import "./Service_request.css"; // Import the CSS file
import { useSelector } from "react-redux";

const Service_requests = () => {
  const [serviceData, setServiceData] = useState([]); // Initialize serviceData as an empty array
  const [filterStatus, setFilterStatus] = useState("All");

  const token = useSelector((state) => state.branch.token);
  const branchId = useSelector((state) => state.branch.branchId);


  axios.interceptors.request.use(
    config=>{
      config.headers.authorization="Bearer "+token;
      return config;
    },
    error=>{
      return Promise.reject(error)
    }
  );

  const fetchData = () => {
    axios
      .get(`http://localhost:8088/getallservicerequestperbranch/${branchId}`) // Assuming 'service_requests' is your endpoint
      .then((response) => {
        setServiceData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilterStatus(event.target.value)
  };

  const filteredServiceData = serviceData.filter((service) => {
    if (filterStatus === "All") {
      return true;
    } else {
      return service.status === filterStatus;
    }
  });

  console.log(filterStatus)

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="tablecontainer">
      <div className="filter-dropdown">
        <label htmlFor="statusFilter">Filter by Status</label>
        <select
          id="statusFilter"
          value={filterStatus}
          onChange={handleFilterChange}
          className="dropdown-select"
        >
          <option value="All">All</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <table className="service-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer Name</th>
            <th>Employee Name</th>
            <th>Service Name</th>
            <th>Status</th>
            <th>Start Time</th>
            <th>End Time</th>
          </tr>
        </thead>
        <tbody>
          {filteredServiceData.map((service,index) => (
            <tr key={service.id}>
              <td>{index+1}</td>
              <td>{service.customername}</td>
              <td>{service.employeename}</td>
              <td>{service.servicename}</td>
              <td
                className={
                  service.status === "completed"
                    ? "completed"
                    : service.status === "pending"
                    ? "pending"
                    : "assigned"
                }
              >
                {service.status === "completed"
                    ? "Completed"
                    : service.status === "pending"
                    ? "Pending"
                    : "assigned"}
              </td>
              <td>{service.starttime}</td>
              <td>{service.endtime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Service_requests;
