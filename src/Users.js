// Users.js

import React, { useEffect, useState } from "react";
import "./styles/Users.css";

function Users() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((response) => response.json())
      .then((data) => {
        setTickets(data.tickets);
        setUsers(data.users);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Create a mapping of user IDs to their respective tickets
  const userTicketsMap = tickets.reduce((map, ticket) => {
    const user = users.find((user) => user.id === ticket.userId);
    const userName = user ? user.name : "Unknown User";
    if (!map[userName]) {
      map[userName] = [];
    }
    map[userName].push(ticket);
    return map;
  }, {});

  return (
    <div className="status_main">
      {users.map((user) => (
        <div key={user.id} className="sub">
          <h3>{user.name}</h3>
          {userTicketsMap[user.name]?.map((ticket) => (
            <div className="status_card" key={ticket.id}>
              <p>{ticket.title}</p>
              <p>{ticket.status}</p>
              {/* Add other ticket information you want to display */}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Users;
