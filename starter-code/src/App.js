import React, { Component } from "react";
import "./App.css";
import ContactList from "./components/ContactList";
import contacts from "./contacts.json";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <h1>IronContacts</h1>
        <ContactList contacts={contacts} />
      </div>
    );
  }
}

export default App;
