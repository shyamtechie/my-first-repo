//import React from 'react'

import axios from "axios";
import { useEffect, useState } from "react";

export default function EmpApi() {

useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then(
        res=>(
            setEmpData(res.data)
        )
    );
},[]);


    const [empData,setEmpData] = useState([]);
  
    // () => ()
  
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Website</th>
            </tr>
          </thead>
          <tbody>
            {empData.map(
                (x)=>( 
                <tr>
                    <td>{x.Name}</td>
                    <td>{x.Email}</td>
                    <td>{x.Phone}</td>
                    <td>{x.Website}</td>
                  </tr>
                 )
            )}
           
          </tbody>
        </table>
      </div>
    );
  }
  