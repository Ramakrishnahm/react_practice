import { useState, useEffect } from "react";

export default function FetchApi() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => setUsers(json));
    console.log(users);
  }, []);

  const extractEmail = (email) => {
    const atIndex = email.indexOf("@");
    if (atIndex >= 0) {
      return email.slice(atIndex + 1);
    }
  };

  return (
    <div>
      {/* {JSON.stringify(users)} */}
      <h4>Fetch Api Data</h4>
      {users.map((user) => (
        <div key={user.id}></div>
      ))}

      <hr />
    </div>
  );
}
