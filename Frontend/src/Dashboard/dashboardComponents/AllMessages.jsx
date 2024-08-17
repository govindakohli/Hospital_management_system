import React, { useState, useContext, useEffect } from "react";
import "./AllMessages.css";
import Context from "../../main";
import axios from "axios";
import {Navigate} from "react-router-dom"
import { toast } from "react-toastify";

function AllMessages() {
  const [messages, setMessages] = useState([]);
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const {data} = await axios.get(
          "http://localhost:5000/api/v1/message/getAllMessages",
          { withCredentials: true }
        );
        setMessages(data.messages);
      } catch (error) {
        toast.error(error.response.data.messages);
      }
    };
    fetchMessages();
  }, []);

  // if (!isAuthenticated) {
  //   return <Navigate to={"/admin/login"} />;
  // }
  return (
    <section className="page doctors">
      <h1>Messages</h1>
      <div className="card">
        {messages && messages.length > 0 ? (
          messages.map((element , index) => {
            // console.log(element)
            return (
              <div className="details" key={index}>
                <p><b>First Name</b>: <span className="message-value">{element.firstName}</span></p>
                <p><b>Last Name</b>: <span className="message-value">{element.lastName}</span></p>
                <p><b>Email:</b> <span className="message-value">{element.email}</span></p>
                <p><b>Phone:</b> <span className="message-value">{element.phone}</span></p>
                <p><b>Message:</b> <span className="message-value">{element.message}</span></p>
              </div>
            );
          })
        ) : (
          <h1>No Messages</h1>
        )}
      </div>
    </section>
  );
}

export default AllMessages;

{
  /* 
<div className="card">
  <div className="details">
  <p>First Name: RAM</p>
  <p>Last Name: RAM</p>
  <p>Email: RAM@GMAIL.COM</p>
  <p>Phone: 123456</p>
  <p>Message: Hello from city hospital</p>
  </div>
</div> */
}
