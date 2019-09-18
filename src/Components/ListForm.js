import React from "react";

const Lists = props => {
  return (
    <>
      {props.lists.map(list => {
        <div className="list" key={list.id}>
          <h3>Team Member:</h3>
          <p>
            <strong>Name: </strong> {list.name}
          </p>
          <p>
            <b>Email: </b>
            {list.email}
          </p>
          <p>
            <b>Position: </b>
            {list.position}
          </p>
        </div>;
      })}
    </>
  ); //return
};
export default Lists;
