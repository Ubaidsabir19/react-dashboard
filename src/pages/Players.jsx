import { useEffect, useState } from "react";
import playersData from "../data/players.json";


const Players = () => {
  const [player, setPlayers] = useState([]);
  useEffect(() => {
    const sortedPlayers = playersData.sort((a, b) => a.rank - b.rank).slice(0, 12);
    setPlayers(sortedPlayers);
  }, []);

  return (
    <div className="px-4 py-4 rounded-lg">
      <div className="w-full border border-gray-200 px-4">
        <div className="flex flex-col space-y-4">
          {player.map(player => (
            <div key={player.id} className="flex items-center justify-between border-b border-gray-200 py-2">
              <div className="flex items-center space-x-4">
                <img
                  src={player.image}
                  alt={player.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <span className="text-lg font-medium">{player.name}</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-sm text-gray-600">Score: {player.score}</span>
                <span className="text-sm text-gray-600">Rank: {player.rank}</span>
              </div>
              <button
                onClick={() => console.log(`Delete player with id ${player.id}`)}
                className="bg-red-500 text-white rounded-full px-4 py-2 text-sm hover:border hover:border-black hover:bg-white hover:text-black"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Players;
