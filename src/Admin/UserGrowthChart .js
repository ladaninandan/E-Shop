// UserGrowthChart.jsx
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import axios from 'axios';

// Register the chart components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const UserGrowthChart = () => {
   const [data, setData] = useState({ labels: [], datasets: [] });

   useEffect(() => {
      axios.get('http://localhost:5000/users/last-month')
         .then(response => {
            const { dates, userCounts } = response.data;
            setData({
               labels: dates,
               datasets: [
                  {
                     label: 'Number of Users',
                     data: userCounts,
                     borderColor: 'rgba(75, 192, 192, 1)',
                     backgroundColor: 'rgba(75, 192, 192, 0.2)',
                     borderWidth: 1,
                     fill: true,
                  }
               ]
            });
         })
         .catch(error => {
            console.error('Error fetching data:', error);
         });
   }, []);

   return (
      <div>
         <h2>User Growth Over the Last Month</h2>
         <Line
            data={data}
            options={{
               responsive: true,
               plugins: {
                  legend: {
                     position: 'top',
                  },
                  tooltip: {
                     callbacks: {
                        label: (context) => {
                           return `Users: ${context.raw}`;
                        },
                     },
                  },
               },
               scales: {
                  x: {
                     title: {
                        display: true,
                        text: 'Date',
                     },
                  },
                  y: {
                     title: {
                        display: true,
                        text: 'Number of Users',
                     },
                     beginAtZero: true,
                  },
               },
            }}
         />
      </div>
   );
};

export default UserGrowthChart;
