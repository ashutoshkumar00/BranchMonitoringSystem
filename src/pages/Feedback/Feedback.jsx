import React, { useState, useEffect } from "react";

import axios from "axios";
import "./Feedback.css"; // Import the CSS file
import { useSelector } from "react-redux";

const FeedbackTable = () => {
  const [feedbackData, setFeedbackData] = useState([]); // Initialize feedbackData as an empty array
  const [filterRating, setFilterRating] = useState("All");

  
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


  const fetchFeedbackData = () => {
    //getfeedbacksperbranch/{id}
    axios
      .get(`http://localhost:8000/getfeedbacksperbranch/${branchId}`) // Replace the URL with your API endpoint
      .then((response) => {
        setFeedbackData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchFeedbackData();
  }, []);

  const handleFilterChange = (event) => {
    setFilterRating(event.target.value);
  };

  const filteredFeedbackData = feedbackData.filter((feedback) => {
    if (filterRating === "All") {
      return true;
    } else {
      return feedback.rating === parseInt(filterRating);
    }
  });

  const renderStars = (rating) => {
    const starElements = [];
    for (let i = 0; i < rating; i++) {
      starElements.push(<i class="ri-star-fill"></i>);
    }
    return starElements;
  };

  return (
    <div className="tableContainer">
      <div className="filterDropdown">
        <label htmlFor="ratingFilter">Filter by Rating</label>
        <select
          id="ratingFilter"
          value={filterRating}
          onChange={handleFilterChange}
          className="dropdownSelect"
        >
          <option value="All">All</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          {/* Add other rating options as needed */}
        </select>
      </div>
      <table className="feedbackTable">
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer Name</th>
            <th>Employee Name</th>
            <th>Service Name</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {filteredFeedbackData.map((feedback,index) => (
            <tr key={feedback.id}>
              <td>{index+1}</td>
              <td>{feedback.customername}</td>
              <td>{feedback.employeename}</td>
              <td>{feedback.servicename}</td>
              <td>{renderStars(feedback.rating)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeedbackTable;
