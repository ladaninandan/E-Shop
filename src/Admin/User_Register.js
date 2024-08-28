import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';

export default function User_Register() {
   const [data, setData] = useState([]);
   const [searchTerm, setSearchTerm] = useState('');

   useEffect(() => {
      axios.get('http://localhost:5000/adminuserdatashow')
         .then(response => {
            setData(response.data);
         })
         .catch(error => {
            console.error('Error fetching data:', error);
         });
   }, []);

   const handleDelete = (id) => {
      axios.delete(`http://localhost:5000/deleteuser/${id}`)
         .then(response => {
            setData(data.filter(item => item.id !== id));
         })
         .catch(error => {
            console.error('Error deleting data:', error);
         });
   };

   const filteredData = data.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase())
   );

   return (
      <div className="d-flex flex-column flex-lg-row" style={{ backgroundColor: "#171821", minHeight: "100vh" }}>
         <Sidebar />
         <div className="flex-grow-1 p-4" style={{ color: 'white' }}>
            <h2 className="mb-4">User Registration Data</h2>
            <input
               type="text"
               placeholder="Search by name or email"
               className="form-control mb-4"
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
               style={{ backgroundColor: '#2b2b2b', color: 'white', border: 'none', borderRadius: '4px' }}
            />
            <div className="table-responsive">
               <table className="table table-dark table-hover table-striped">
                  <thead>
                     <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Number</th>
                        <th>Password</th>
                        <th>Last Login</th>
                        <th>Actions</th>
                     </tr>
                  </thead>
                  <tbody>
                     {filteredData.map((item, index) => (
                        <tr key={index}>
                           <td>{item.id}</td>
                           <td>
                              <div className="d-flex align-items-center">
                                 <div className="avatar-circle me-2" style={{
                                    backgroundColor: '#4CAF50',
                                    color: 'white',
                                    borderRadius: '50%',
                                    width: '30px',
                                    height: '30px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    fontSize: '16px'
                                 }}>
                                    {item.name[0].toUpperCase()}
                                 </div>
                                 {item.name}
                              </div>
                           </td>
                           <td>{item.email}</td>
                           <td>{item.number}</td>
                           <td>{item.password}</td>
                           <td>{item.last_login}</td>
                           <td>
                              <button
                                 className="btn btn-danger btn-sm"
                                 onClick={() => handleDelete(item.id)}>
                                 Delete
                              </button>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
            {/* Pagination controls */}
            <div className="pagination-controls d-flex justify-content-between align-items-center mt-3">
               <button className="btn btn-outline-light btn-sm">Previous</button>
               <div>Page 1 of 4</div>
               <button className="btn btn-outline-light btn-sm">Next</button>
            </div>
         </div>
      </div>
   );
}