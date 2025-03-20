import React, { useEffect, useState } from "react";
import axios from "axios";
import useDebounce from "../hooks/useDebounce";
import "../styles/componentStyles/userList.css";
import "../styles/componentStyles/searchBar.css"; // Import search bar CSS

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  // Create a HashMap for O(1) lookups
  const createHashMap = (users) => {
    const hashMap = {};
    users.forEach((user) => {
      hashMap[user.name.toLowerCase()] = user;
    });
    return hashMap;
  };

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
        setFilteredUsers(response.data); // Initialize filtered users
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  useEffect(() => {
    if (debouncedSearchTerm) {
      const hashMap = createHashMap(users);
      const searchTermLower = debouncedSearchTerm.toLowerCase();

      // Filter users using the HashMap
      const filtered = Object.values(hashMap).filter((user) =>
        user.name.toLowerCase().includes(searchTermLower)
      );
      setFilteredUsers(filtered);
    } else {
      setFilteredUsers(users); // Reset to all users if search term is empty
    }
  }, [debouncedSearchTerm, users]);

  return (
    <section className="user-list">
      <h2>User List</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input" // Add this class
        />
      </div>
      <div className="user-cards">
        {filteredUsers.map((user) => (
          <div key={user.id} className="user-card">
            <h3>{user.name}</h3>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
            <p><strong>Company:</strong> {user.company.name}</p>
            <p><strong>Address:</strong> {user.address.street}, {user.address.city}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UserList;