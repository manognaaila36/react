
import './Read.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Read() {
  const [fetchId, setFetchId] = useState('');
  const [fetchedDonor, setFetchedDonor] = useState(null);
  const [donors, setDonors] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    fetchDonors();
  }, []);

  const fetchDonors = () => {
    fetch('http://localhost:5000/api/donors')
      .then((response) => {
        console.log('Fetched donors:', response.data);
        setDonors(response.data);
      })
      .catch((error) => console.error('Error fetching donors:', error));
  };

  const handleDeleteClick = (id) => {
    fetch(`http://localhost:5000/api/donors/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          console.log('Donor deleted successfully');
          fetchDonors(); // Refresh the donor list after deletion
        } else {
          console.error('Error deleting donor:', response.statusText);
        }
      })
      .catch((error) => console.error('Error deleting donor:', error));
  };

  const handleFetchData = () => {
    fetch(`http://localhost:5000/api/donors/${fetchId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched donor:', data);
        setFetchedDonor(data);
        setButtonClicked(true);
      })
      .catch((error) => {
        console.error('Error fetching donor:', error);
        setFetchedDonor(null);
        setButtonClicked(true);
      });
  };



 
  const [showNoDataMessage, setShowNoDataMessage] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [updateData, setUpdateData] = useState({
    id: '',
    name: '',
    age: '',
    phone: '',
    bg: '',
    ml: '',
    gender: '',
    ddate: ''
  });

  useEffect(() => {
    fetchDonors();
  }, []);

  





  const handleUpdateClick = (data) => {
    setUpdateData({
      id: data[0],
      name: data[1],
      age: data[2],
      phone: data[3],
      bg: data[4],
      ml: data[5],
      gender: data[6],
      ddate: data[7]
    });
    document.getElementById('updateModal').style.display = 'block';
  };
  


  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [updateError, setUpdateError] = useState('');


  const handleUpdate = () => {
    // Send the updated data to the server
    axios.put(`http://localhost:5000/api/donors/${updateData.id}`, updateData)

      .then((response) => {
        console.log('Update successful');
        // Refresh the donor list after update
        fetchDonors();
        // Show success message
        setUpdateSuccess(true);
        // Close the update modal
        document.getElementById('updateModal').style.display = 'none';
      })
      .catch((error) => {
        console.error('Error updating donor:', error);
        // Set the error message state
        setUpdateError('Error updating donor. Please try again.');
      });  };

  // Function to close success message after some time
  const closeSuccessMessage = () => {
    setUpdateSuccess(false);
  };

  // Use useEffect to close success message after 3 seconds
  useEffect(() => {
    if (updateSuccess) {
      const timer = setTimeout(() => {
        closeSuccessMessage();
      }, 30000); 
      return () => clearTimeout(timer);
    }
  }, [updateSuccess]);

  return (
    <>
      <h2 style={{ textAlign: 'center', padding: '15px' }}>Details of Donors</h2>

      <div className='w'>
        <h3>Get details of donor by Id</h3>
        <input
          type='text'
          placeholder='Enter ID...'
          value={fetchId}
          onChange={(e) => setFetchId(e.target.value)}
        />
        <button className='button' onClick={handleFetchData}>
          Get
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button className='button'>
          <Link to='/Readall'>Get All</Link>
        </button>
      </div>

      {fetchedDonor ? (
        <div className='m s'>
          <h3 style={{paddingLeft:'200px',fontSize:'20px'}}>Details for Donor ID: {fetchId}</h3><br/>
          {Array.isArray(fetchedDonor) && fetchedDonor.length >= 1 ? (

<table >
<tbody>
  {fetchedDonor.map((data, index) => (
    <div className='row' key={index}>
      <tr>
        <th>ID</th>
        <td className='u'>{data[0]}</td>
      </tr><br />
      <tr>
        <th>Name</th>
        <td className='u'>{data[1]}</td>
      </tr><br />
      <tr>
        <th>Age</th>
        <td className='u'>{data[2]}</td>
      </tr><br />
      <tr>
        <th>Mobile Number</th>
        <td className='u'>{data[3]}</td>
      </tr><br />
      <tr>
        <th>Blood Group</th>
        <td className='u'>{data[4]}</td>
      </tr><br />
      <tr>
        <th>Units</th>
        <td className='u'>{data[5]}</td>
      </tr><br />
      <tr>
        <th>Gender</th>
        <td cclassName='u'>{data[6]}</td>
      </tr><br />
      <tr>
        <th>Date</th>
        <td className='u'>{data[7]}</td>
      </tr>
      <br />
      <button className="button yuva" style={{ backgroundColor: 'blue', margin: '0 30px 0px 10px' }} onClick={() => handleUpdateClick(data)}>Update</button>
      <button className="button yuva" style={{ backgroundColor: '#de1f26' }} onClick={() => handleDeleteClick(data[0])}>Delete</button>
    </div>
  ))}
</tbody>
</table>
            
          ) : (
            <p className='m'>No data available for the specified ID.</p>
          )}
        </div>
      ) : (
        <p className='m' style={{padding:'25px 20px 20px 250px'}}>No data available for the specified ID.</p>
      )}



{updateSuccess && (
                <div className="success-message"> Data updated successfully and click on get to read updated data.</div>
              )}

        {updateError && (
            <div className="error-message">{updateError}</div>
          )}

        


      {/* Update Modal */}
      <div id="updateModal" className="modal" style={{padding:"5px"}}>
        <div className="modal-content">
          <span className="close" onClick={() => document.getElementById('updateModal').style.display = 'none'}>&times;</span>
          <h3>&nbsp;Update Donor</h3>
          <input
            type="text"
            placeholder="ID"
            value={updateData.id} className='form-field-u'
            onChange={(e) => setUpdateData({ ...updateData, id: e.target.value })}
          />
          <input
            type="text"
            placeholder="Name"
            value={updateData.name}  className='form-field-u' 
            onChange={(e) => setUpdateData({ ...updateData, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Age"
            value={updateData.age} className='form-field-u' 
            onChange={(e) => setUpdateData({ ...updateData, age: e.target.value })}
          />
          <input
            type="text"
            placeholder="Phone"
            value={updateData.phone} className='form-field-u' 
            onChange={(e) => setUpdateData({ ...updateData, phone: e.target.value })}
          />
          <input
            type="text"
            placeholder="Blood Group"
            value={updateData.bg} className='form-field-u' 
            onChange={(e) => setUpdateData({ ...updateData, bg: e.target.value })}
          />
          <input
            type="text"
            placeholder="Units"
            value={updateData.ml} className='form-field-u' 
            onChange={(e) => setUpdateData({ ...updateData, ml: e.target.value })}
          />
          <input
            type="text"
            placeholder="Gender" 
            value={updateData.gender} className='form-field-u'
            onChange={(e) => setUpdateData({ ...updateData, gender: e.target.value })}
          />
          <input
            type="date"
            placeholder="Date"
            value={updateData.ddate} className='form-field-u' 
            onChange={(e) => setUpdateData({ ...updateData, ddate: e.target.value })}
          /><br/>
          <button onClick={handleUpdate} className="button h13" style={{ backgroundColor: 'blue',margin:'10px',padding:'10px'}}>Save Changes</button>
        </div>
      </div>
    </>
  );
}