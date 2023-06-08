import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [users, setUser] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [clonedList, setClonedUsers] = useState([]);
  const [count, setCount] = useState(1);

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const userList = await response.json();
      setUser(userList);
      const clonedList = [...userList];
      setClonedUsers(clonedList);
    };

    loadData();
  }, []);

  const sortList = () => {
    if (count % 3 !== 2) {
      const sortedList = [...clonedList].sort((a, b) =>
        sortOrder === "asc"
          ? a.name.length - b.name.length
          : b.name.length - a.name.length
      );
      const sortType = sortOrder === "asc" ? "desc" : "asc";
      setSortOrder(sortType);
      setClonedUsers(sortedList);
    } else {
      setClonedUsers(users);
    }
    setCount(count + 1);
  };

  return (
    <div className="App">
      <h1>User List</h1>
      <button onClick={sortList}>Sort</button>
      {clonedList &&
        clonedList.map((user) => (
          <ul key={user.id}>
            <li>{user.name}</li>
          </ul>
        ))}
    </div>
  );
}
