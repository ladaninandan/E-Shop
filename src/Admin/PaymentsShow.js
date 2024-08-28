import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import axios from 'axios'

export default function PaymentsShow() {

   const [data, setdata] = useState([]);
   const [searchTerm, setSearchTerm] = useState('');

   useEffect(() => {
      axios.get("http://localhost:5000/payments")
         .then(response => {
            setdata(response.data)
         }).catch(error => {
            console.log("error in fatch data ");
         })
   }, []);

   const filteredData = data.filter(item =>
      String(item.id).includes(searchTerm) ||
      String(item.order_id).includes(searchTerm)
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
                        <th>payment_ID</th>
                        <th>Order_ID</th>
                        <th>Amount </th>
                        <th>method</th>
                        <th>currency</th>
                        <th>status</th>
                        <th>created_at</th>
                     </tr>
                  </thead>
                  <tbody>
                     {filteredData.map((item, index) => (
                        <tr key={index}>
                           <td>{item.id}</td>
                           <td>
                              <div className="d-flex align-items-center">
                                 <div>
                                    {item.payment_id}
                                 </div>
                              </div>
                           </td>
                           <td>
                              <div className="d-flex align-items-center">
                                 <div>
                                    {item.order_id}
                                 </div>
                              </div>
                           </td>
                           <td>{item.amount}</td>
                           <td>{item.method}</td>
                           <td>{item.currency}</td>
                           <td>{item.status}</td>
                           <td>{item.created_at}</td>
                           <td>
                              {/* <button
                                 className="btn btn-danger btn-sm"
                                 onClick={() => handleDelete(item.id)}>
                                 Delete
                              </button> */}
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
   )
}
