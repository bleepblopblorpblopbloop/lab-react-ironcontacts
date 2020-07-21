import React from "react";

const ContactList = (props) => {
  const { contacts, handleDelete } = props;
  console.log(contacts);

  const tableData = () => {
    return contacts.map((el, i) => {
      return (
        <tr key={el.id}>
          <td style={{ height: "175px" }}>
            <img
              style={{ height: "150px", width: "auto" }}
              src={el.pictureUrl}
              alt={el.name}
            />
            {}
          </td>
          <td>{el.name}</td>
          <td>{el.popularity.toFixed(2)}</td>
          <td>
            <button onClick={() => handleDelete(el.id)} className="delete-btn">
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  return (
    <table>
      <tbody>
        <tr>
          <th>
            <h3>Picture</h3>
          </th>
          <th>
            <h3>Name</h3>
          </th>
          <th>
            <h3>Popularity</h3>
          </th>
          <th>
            <h3>Action</h3>
          </th>
        </tr>
        {tableData()}
      </tbody>
    </table>
  );
};

export default ContactList;
