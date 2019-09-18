import React, { useState } from "react";

const ListForm = props => {
  const [list, setlist] = useState({
    name: "",
    email: "",
    role: ""
  });
  const handleChange = event => {
    setlist({ ...list, [event.target.name]: event.target.value });
  };
  const submitList = event => {
    event.preventDefault();
    props.addNewList(list);
    setlist({ name: "", email: "", role: "" });
  };

  return (
    <form onSubmit={submitList}>
      <label htmlFor="name">
        Name:
        <input
          id="id"
          type="text"
          name="name"
          onChange={handleChange}
          value={list.name}
          placeholder="Enter Name"
        ></input>
      </label>

      <label htmlFor="email">
        Email:
        <input
          id="id"
          type="text"
          name="email"
          onChange={handleChange}
          value={list.email}
          placeholder="Enter Email"
        ></input>
      </label>

      <label htmlFor="role">
        Role:
        <input
          id="id"
          type="text"
          name="role"
          onChange={handleChange}
          value={list.role}
          placeholder="Enter Job Role"
        ></input>
      </label>

      <button type="submit">Submit</button>
    </form>
  ); //close return list form
}; // close list form
export default ListForm;
