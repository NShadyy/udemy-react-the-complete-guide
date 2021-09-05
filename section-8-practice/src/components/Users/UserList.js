import React from "react";

import Card from "../UI/Card";
import styles from "./UserList.module.css";

const UserList = (props) => {
  if (!props.users || !props.users.length) {
    return <div></div>;
  }

  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => {
          return (
            <li key={user.id}>
              {user.name} ({user.age} years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UserList;
