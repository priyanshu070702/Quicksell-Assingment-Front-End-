// Status.js

import React, { useState, useEffect } from "react";
import "./styles/Status.css";

function Status() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((response) => response.json())
      .then((data) => setTickets(data.tickets))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const renderTicketsByStatus = (status) => {
    // Filter tickets based on the provided status
    const filteredTickets = tickets.filter((ticket) => ticket.status.toLowerCase() === status.toLowerCase());

    // Render filtered tickets
    return filteredTickets.map((ticket) => (
      <div key={ticket.id} className="status_card">
        <p className="keyp">{ticket.id}</p>
        <p className="keyp2">{ticket.title}</p>
        <p>{ticket.tag}</p>
        {/* Add other ticket information you want to display */}
      </div>
    ));
  };

  return (
    <div className="status_main">
      <div className="sub">
        <h3>ToDo</h3>
        {renderTicketsByStatus("Todo")}
      </div>
      <div className="sub">
        <h3>InProgress</h3>
        {renderTicketsByStatus("In progress")}
      </div>
      <div className="sub">
        <h3>Backlog</h3>
        {renderTicketsByStatus("Backlog")}
      </div>
      <div className="sub">
        <h3>Done</h3>
        {renderTicketsByStatus("Done")}
      </div>
      <div className="sub">
        <h3>Cancelled</h3>
        {renderTicketsByStatus("Cancelled")}
      </div>
    </div>
  );
}

export default Status;
