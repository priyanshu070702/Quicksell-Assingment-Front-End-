// Arrange.js

import React, { useState, useEffect } from "react";
import "./styles/Arrange.css";

function Arrange() {
  const [sortedTickets, setSortedTickets] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((response) => response.json())
      .then((data) => {
        // Sort tickets based on the "priority" property in ascending order
        const sortedData = data.tickets.sort((a, b) => b.priority - a.priority);
        setSortedTickets(sortedData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="card-container">
      {sortedTickets.map((ticket) => (
        <div key={ticket.id} className="card">
          <p>{`Title: ${ticket.title}`}</p>
          <p>{`Status: ${ticket.status}`}</p>
          {/* Add other ticket information you want to display */}
        </div>
      ))}
    </div>
  );
}

export default Arrange;
