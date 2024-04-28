import './Read.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ReadAll() {
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  const [donors, setDonors] = useState([]);

  // Fetch all donors from the backend when the component mounts
  useEffect(() => {
    fetchDonors();
  }, []);

  const fetchDonors = () => {
    axios.get('http://localhost:5000/api/donors')
      .then(response => {
        console.log('Fetched donors:', response.data);
        setDonors(response.data);
      })
      .catch(error => console.error('Error fetching donors:', error));
  };

  return (
    <><h2 style={{ textAlign: 'center', padding: '15px' }}>Details of Donors</h2>
      <p className="hr-lines"></p><br />

      {donors.length === 0 ? (
        <p>No data available</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Mobile Number</th>
              <th>Blood Group</th>
              <th>Units</th>
              <th>Gender</th>
              <th>Donated Date</th>
            </tr>
          </thead>
          <tbody>
            {donors.map((data, index) => (
              <tr className="row" key={index}>
                <td className='h0'>{data[0]}</td>
                <td className='h0'>{data[1]}</td>
                <td className='h0'>{data[2]}</td>
                <td className='h0'>{data[3]}</td>
                <td className='h0'>{data[4]}</td>
                <td className='h0'>{data[5]}</td>
                <td className='h0'>{data[6]}</td>
                <td className='h0'>{data[7]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <p style={{ padding: '15px' }}></p>
      <button className='button' style={{ marginLeft: '200px' }}><Link to='/Read'><i className="fa-solid fa-caret-left fa-xl h11"></i>&nbsp;Back</Link></button>
      <p style={{ margin: '15px' }}></p>
      <br />
      </>
  )}