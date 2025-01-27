/* eslint-disable react/prop-types */
export function Leaderboard({ leaderboard = [] }) {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold mb-2">Leaderboard</h2>
      <table className="table-auto border-collapse border border-gray-400 w-full">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Rank</th>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Total Points</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((user, index) => (
            <tr key={user._id}>
              <td className="border border-gray-300 p-2">{index + 1}</td>
              <td className="border border-gray-300 p-2">{user.name}</td>
              <td className="border border-gray-300 p-2">{user.totalPoints}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
