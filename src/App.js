import React, { useState } from "react";
import "./App.css";
import ListForm from "./Components/ListForm";
import Lists from "./Components/Lists";
import ReactDOM from "react-dom";

function App() {
  const [lists, setlists] = useState([
    {
      id: 1,
      name: "Vanna Sok",
      email: "vannasok92@yahoo.com",
      role: "Full Stack Web Dev"
    },
    {
      id: 2,
      name: "Shang",
      email: "vannasok92@yahoo.com",
      role: "Full Stack Web Dev"
    },
    {
      id: 3,
      name: "Sam",
      email: "vannasok92@yahoo.com",
      role: "Full Stack Web Dev"
    }
  ]);
  const addNewList = list => {
    const newList = {
      name: list.name,
      email: list.email,
      role: list.role
    };
    setlists([...lists, newList]);
  };
  return (
    <div className="App">
      <h1>Team Builder</h1>
      <ListForm addNewList={addNewList} />
      <Lists lists={lists} />
    </div>
  );
}

export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
