// import React, { useState, useEffect } from 'react';
// import "./Dashboard.css";

// function Dashboard() {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   const [grouping, setGrouping] = useState('status');
//   const [sorting, setSorting] = useState('priority');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');

//         if (!response.ok) {
//           throw new Error('Failed to fetch data');
//         }

//         const result = await response.json();
//         setData(result);
//         setError(null);
//       } catch (error) {
//         console.error('Error fetching data:', error.message);
//         setData(null);
//         setError('Error fetching data. Please try again.');
//       }
//     };

//     fetchData();
//   }, []); // Empty dependency array means this effect runs once after the initial render

//   const groupAndSortTickets = () => {
//     if (!data || !data.tickets) {
//       return [];
//     }

//     // Grouping
//     let groupedTickets = data.tickets;
//     if (grouping === 'status') {
//       groupedTickets = groupByStatus(groupedTickets);
//     } else if (grouping === 'user') {
//       groupedTickets = groupByUser(groupedTickets);
//     } else if (grouping === 'priority') {
//       groupedTickets = groupByPriority(groupedTickets);
//     }

//     // Sorting
//     if (sorting === 'priority') {
//       groupedTickets = sortTicketsByPriority(groupedTickets);
//     } else if (sorting === 'title') {
//       groupedTickets = sortTicketsByTitle(groupedTickets);
//     }

//     return groupedTickets;
//   };

//   const groupByStatus = (tickets) => {
//     const grouped = {};
//     tickets.forEach((ticket) => {
//       const status = ticket.status;
//       if (!grouped[status]) {
//         grouped[status] = [];
//       }
//       grouped[status].push(ticket);
//     });
//     return grouped;
//   };

//   const groupByUser = (tickets) => {
//     const grouped = {};
//     tickets.forEach((ticket) => {
//       const user = ticket.userId;
//       if (!grouped[user]) {
//         grouped[user] = [];
//       }
//       grouped[user].push(ticket);
//     });
//     return grouped;
//   };

//   const groupByPriority = (tickets) => {
//     const grouped = {};
//     tickets.forEach((ticket) => {
//       const priority = ticket.priority;
//       if (!grouped[priority]) {
//         grouped[priority] = [];
//       }
//       grouped[priority].push(ticket);
//     });
//     return grouped;
//   };

//   const sortTicketsByPriority = (groupedTickets) => {
//     const sortedTickets = [];
//     Object.keys(groupedTickets).forEach((key) => {
//       sortedTickets.push(...groupedTickets[key]);
//     });
//     sortedTickets.sort((a, b) => b.priority - a.priority);
//     return sortedTickets;
//   };

//   const sortTicketsByTitle = (groupedTickets) => {
//     const sortedTickets = [];
//     Object.keys(groupedTickets).forEach((key) => {
//       sortedTickets.push(...groupedTickets[key]);
//     });
//     sortedTickets.sort((a, b) => a.title.localeCompare(b.title));
//     return sortedTickets;
//   };

//   const groupedAndSortedTickets = groupAndSortTickets();

//   const handleGroupingChange = (newGrouping) => {
//     setGrouping(newGrouping);
//   };

//   const handleSortingChange = (newSorting) => {
//     setSorting(newSorting);
//   };

//   return (
//     <div>
//       <h4>Dashboard</h4>
//       <div className="button-container">
//         <button onClick={() => handleGroupingChange('status')}>Group by Status</button>
//         <button onClick={() => handleGroupingChange('user')}>Group by User</button>
//         <button onClick={() => handleGroupingChange('priority')}>Group by Priority</button>
//         <button onClick={() => handleSortingChange('priority')}>Sort by Priority</button>
//         <button onClick={() => handleSortingChange('title')}>Sort by Title</button>
//       </div>
//       {error ? (
//         <p>{error}</p>
//       ) : (
//         <div className="card-container">
//           {groupedAndSortedTickets.map((item) => (
//             <div key={item.id} className="card">
//               <p>ID: {item.id}</p>
//               <p>Title: {item.title}</p>
//               <p>Tag: {item.tag.join(', ')}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Dashboard;

import React from "react";
import "./App.css";
import Users from "./Users";
import Title from "./Title";
import Status from "./Status";
import Priority from "./Priority";
import Header from "./Header";
import Arrange from "./Arrangepriority";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className="main">
        <div classsName="nav">
          <nav>
            <Header/>
          </nav>
        </div>
        <section>
          <Routes>
            <Route path="users" element={<Users />} />
            <Route path="status" element={<Status />} />
            <Route path="title" element={<Title />} />
            <Route path="priority" element={<Priority />} />
            <Route path="arrangeP" element={<Arrange />} />
          </Routes>
        </section>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;