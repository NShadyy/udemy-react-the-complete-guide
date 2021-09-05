import React, { useState } from "react";

import Wrapper from "./components/Helpers/Wrapper";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
import "./App.css";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (name, age) => {
    setUsersList((prevState) => {
      return [
        ...prevState,
        {
          name,
          age,
          id: Math.random().toString(),
        },
      ];
    });
  };

  return (
    <Wrapper>
      <AddUser onAddUser={addUserHandler} />

      <UserList users={usersList} />
    </Wrapper>
  );
}

export default App;
