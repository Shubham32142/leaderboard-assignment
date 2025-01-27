import axios from "axios";
// eslint-disable-next-line react/prop-types
export function ClaimButton({ userId, onClaim }) {
  const handleClaim = () => {
    if (!userId) {
      alert("Please select a user to claim points.");
      return;
    }
    axios
      .post("https://leaderboard-assignment.onrender.com/claim", { userId })
      .then((response) => {
        alert(`Points claimed ${response.data.points}`);
        onClaim(); //refreshes the leaderboard
      })
      .catch((err) => console.error(err));
  };
  return (
    <button
      onClick={handleClaim}
      className="bg-blue-400 text-white p-2 rounded"
    >
      Claim Points
    </button>
  );
}
