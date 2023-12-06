import React, { useState, useEffect } from 'react';
//import APIService from './APIservice';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AdminChart3 = (props) => {
  
  return (
    <div className="charts">
      <ResponsiveContainer width="60%" height={300}>
        <BarChart
          width={800}
          data={props.data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Employees" fill="#90EE90" />
        </BarChart>
      </ResponsiveContainer>
      
    </div>
  );
};

export default AdminChart3;