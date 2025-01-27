/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";
export function UserDropdown({ onSelect }) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/").then((response) => {
      setUsers(response.data);
    });
  }, []);
  return (
    <>
      <select
        onChange={(e) => onSelect(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">Select a user</option>
        {users.map((user) => (
          <option key={user._id} value={user._id}>
            {user.name}
          </option>
        ))}
      </select>
    </>
  );
}
