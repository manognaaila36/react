import '../Qr.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Add.css'


export default function Add() {
  const [donors, setDonors] = useState([]);
  const [newDonor, setNewDonor] = useState({
    id: '',
    name: '',
    age: '',
    phone: '',
    bg: '',
    ml:'',
    gender: '',
    ddate: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetchDonors();
  }, []);

  const fetchDonors = () => {
    fetch('http://localhost:5000/api/donors')
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched donors:', data);
        setDonors(data);
      })
      .catch((error) => console.error('Error fetching donors:', error));
  };

  const handleAddDonor = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/donors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newDonor),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Internal Server Error');
      }

      console.log('Donor added successfully');
      fetchDonors(); // Refresh the donors list
      setNewDonor({
        id: '',
        name: '',
        age: '',
        phone: '',
        bg: '',
        ml:'',
        gender: '',
        ddate: '',
      });       // Clear the input fields
      
      setSuccessMessage('Donor added successfully'); // Set the success message
      setErrorMessage(''); // Reset error message
    } catch (error) {
      console.error('Error adding donor:', error.message);
      
      setSuccessMessage(''); // Clear any existing success message
      setErrorMessage('Error adding donor: ' + error.message);
    }
  };

  return (
    <>
      <p style={{ textAlign: 'center', fontSize: '25px', padding: '15px', fontWeight: 'bold' }}>
        Include Donor Details
      </p>
      <div className='h6'>
        <form>
        <label htmlFor="bg">Donor Id</label>
          <input
            type="text"
            placeholder="Enter Id.."
            value={newDonor.id}
            onChange={(e) => setNewDonor({ ...newDonor, id: e.target.value })}
          />

          <label htmlFor="name">Donor Name</label>
          <input
            type="text"
            placeholder="Enter Name.."
            value={newDonor.name}
            onChange={(e) => setNewDonor({ ...newDonor, name: e.target.value })}
          />

          <label htmlFor="age">Donor Age</label>
          <input
            type="text"
            placeholder="Enter Age.."
            value={newDonor.age}
            onChange={(e) => setNewDonor({ ...newDonor, age: e.target.value })}
          />

          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            placeholder="Enter Phone Number.."
            value={newDonor.phone}
            onChange={(e) => setNewDonor({ ...newDonor, phone: e.target.value })}
          />

        <label htmlFor="bg">Donor Blood Group</label>
          <input
            type="text"
            placeholder="Enter Blood Group.."
            value={newDonor.bg}
            onChange={(e) => setNewDonor({ ...newDonor, bg: e.target.value })}
          />
        <label htmlFor="ml">Units of Blood Donated</label>
          <input
            type="text"
            placeholder="Enter Quantity of Blood Donated.."
            value={newDonor.ml}
            onChange={(e) => setNewDonor({ ...newDonor, ml: e.target.value })}
          />
          <label htmlFor="gender">Gender</label>
          <input
            type="text"
            placeholder="Enter Gender.."
            value={newDonor.gender}
            onChange={(e) => setNewDonor({ ...newDonor, gender: e.target.value })}
          />

          <label htmlFor="address">Donated Date</label>
          <input
            type="text"
            placeholder="Enter date ..."
            value={newDonor.ddate}
            onChange={(e) => setNewDonor({ ...newDonor, ddate: e.target.value })}
          />

          <button className="h7" onClick={handleAddDonor}>
            Add Donor
          </button>
          {successMessage && (
            <p style={{ color: 'green', fontSize: '20px', fontWeight: 'bold' }}>{successMessage}</p>
          )}
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </form>
      </div>
       
       
        
       


      </>
  );
}