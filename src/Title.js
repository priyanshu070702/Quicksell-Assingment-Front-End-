// Title.js

import React, { useEffect, useState } from "react";
import "./styles/Title.css";

function Title() {
  const [sortedTickets, setSortedTickets] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((response) => response.json())
      .then((data) => {
        // Sort tickets based on the "title" property in ascending order
        const sortedData = data.tickets.sort((a, b) => a.title.localeCompare(b.title));
        setSortedTickets(sortedData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="card-container">
      {sortedTickets.map((ticket) => (
        <div key={ticket.id} className="card">
          <p className="keyp">{ticket.id}</p>
          <p className="keyp">{ticket.title}</p>
          <p>{ticket.status}</p>
        </div>
      ))}
    </div>
  );
}

export default Title;
