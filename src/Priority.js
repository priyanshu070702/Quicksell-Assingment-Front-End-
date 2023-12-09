import React, { useState, useEffect } from "react";
import "./styles/Status.css";

// Define a generic PriorityComponent
const PriorityComponent = ({ ticket }) => (
  <div className={`priority${ticket.priority} status_card`}>
    <p>{ticket.id}</p>
    <p>{ticket.title}</p>
    <p>{ticket.tag}</p>
    {/* Add other ticket information you want to display */}
  </div>
);

function Priority() {
  const [tickets, setTickets] = useState([]);
  const priorityColumnNames = {
    0: "No",
    1: "Low",
    2: "Medium",
    3: "Low",
    4: "Urgent ",
  };

  useEffect(() => {
    // Fetch data from the API
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((response) => response.json())
      .then((data) => setTickets(data.tickets))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const renderTicketsByPriority = (priority) => {
    // Filter tickets based on the provided priority
    const filteredTickets = tickets.filter((ticket) => ticket.priority === priority);

    // Render filtered tickets using the generic PriorityComponent
    return filteredTickets.map((ticket) => <PriorityComponent key={ticket.id} ticket={ticket} />);
  };

  return (
    <div className="status_main">
      {[4,3,2,1,0].map((priority) => (
        <div className="sub" key={priority}>
          <h3>{priorityColumnNames[priority]}</h3>
          {renderTicketsByPriority(priority)}
        </div>
      ))}
    </div>
  );
}

export default Priority;
