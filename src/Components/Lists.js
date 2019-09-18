import React from "react";

const Lists = props => {
  return (
    <>
      <div className="showcase">
        {props.lists.map(list => (
          <div className="list" key={list.id}>
            <div>
              <button
                className="editButton"
                onClick={() => {
                  props.handleEdit(list);
                }}
              >
                Edit
              </button>
            </div>
            <h3>Team Member:</h3>
            <p>
              <strong>Name: </strong> {list.name}
            </p>
            <p>
              <b>Email: </b>
              {list.email}
            </p>
            <p>
              <b>Job Title: </b>
              {list.role}
            </p>
          </div>
        ))}
      </div>
    </>
  ); //return
};
export default Lists;
