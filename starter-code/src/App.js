import React, { Component } from "react";
import "./App.css";
import ContactList from "./components/ContactList";
import contacts from "./contacts.json";

class App extends Component {
  state = { firstFive: contacts.slice(0, 5) };

  addRandom = () => {
    const random = contacts[Math.floor(Math.random() * contacts.length)];

    if (
      this.state.firstFive.find((contact) => {
        return contact.id === random.id;
      })
    ) {
      if (this.state.firstFive.length < contacts.length) {
        this.addContact();
      }
      return;
    }

    let shallowCopy = [...this.state.firstFive];
    shallowCopy.unshift(random);
    this.setState({ firstFive: shallowCopy });
  };

  sortByName = () => {
    const sorted = [...this.state.firstFive];
    sorted.sort((a, b) => a.name.localeCompare(b.name));

    this.setState({
      firstFive: sorted,
    });
  };

  sortByPop = () => {
    const sorted = [...this.state.firstFive];
    sorted.sort((a, b) => {
      return b.popularity - a.popularity;
    });

    this.setState({
      firstFive: sorted,
    });
  };

  handleDelete = (contactId) => {
    this.setState({
      firstFive: this.state.firstFive.filter((contact) => {
        return contact.id !== contactId;
      }),
    });
  };

  render() {
    return (
      <div className="app-container">
        <h1>IronContacts</h1>
        <div>
          <button className="btn" onClick={this.addRandom}>
            Add Random Contact
          </button>
          <button className="btn" onClick={this.sortByName}>
            Sort By Name
          </button>
          <button className="btn" onClick={this.sortByPop}>
            Sort By Popularity
          </button>
        </div>
        <ContactList
          contacts={this.state.firstFive}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
