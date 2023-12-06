import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import FeaturedInfo from "./FeaturedInfo";

const BasicInfo = () => {
    const [employees, setEmployees] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [sales, setSales] = useState([]);
    const token = useSelector((state) => state.branch.token);
    const branchId = useSelector((state) => state.branch.branchId);
    const role = useSelector((state) => state.branch.role);

    useEffect(() => {
        
        axios.interceptors.request.use(
            config=>{
              config.headers.authorization="Bearer "+token;
              return config;
            },
            error=>{
              return Promise.reject(error)
            }
          );

        axios.get(`http://localhost:9000/employees/${branchId}`)
        .then((response) => setEmployees(response.data))
        .catch((error) => console.error("Error fetching employees", error));

        axios.get(`http://localhost:8087/totalcustomer/${branchId}`)
        .then((response) => setCustomers(response.data))
        .catch((error) => console.error("Error fetching customers", error));

        axios.get(`http://localhost:8088/servicesoldperbranch/${branchId}`)
        .then((response) => setSales(response.data))
        .catch((error) => console.error("Error fetching sales", error));
    }, []);


    console.log(employees)
    console.log(customers)
    console.log(sales)

    return (
        <div>
           <FeaturedInfo employees={employees} customers={customers} sales={sales} />
        </div>
    );
};

export default BasicInfo;
