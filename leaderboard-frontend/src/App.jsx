import "./App.css";
import { UserDropdown } from "./Components/UserDropdown";
import { ClaimButton } from "./Components/ClaimButton";
import { Leaderboard } from "./Components/Leaderboard";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [selectedUser, setSelectedUser] = useState("");
  const [leaderboard, setLeaderboard] = useState([]);

  const handleUserSelect = (userId) => setSelectedUser(userId);

  const fetchLeaderboard = () => {
    axios.get("http://localhost:5000/leaderboard").then((response) => {
      setLeaderboard(response.data);
    });
  };

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  const refreshLeaderboard = () => {
    fetchLeaderboard();
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Leaderboard App</h1>
      <UserDropdown onSelect={handleUserSelect} />
      <ClaimButton userId={selectedUser} onClaim={refreshLeaderboard} />
      <Leaderboard leaderboard={leaderboard} />
    </div>
  );
}

export default App;
