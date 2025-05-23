import React from "react";

interface Batsman {
  batsman: string;
  country: string;
  rank: string;
  rating: number;
}

interface Props {
  title: string;
  players: Batsman[];
}

const SingleRanking: React.FC<Props> = ({ title, players }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-bold text-[#7C00FE] mb-4">{title}</h2>
      <ul className="space-y-3">
        {players.map((player, index) => (
          <li key={index} className="flex justify-between items-center border-b pb-2">
            <div>
              <span className="font-medium">{player.rank}. {player.batsman}</span>
              <span className="text-sm text-gray-500 ml-2">({player.country})</span>
            </div>
            <div className="text-[#F5004F] font-semibold">{player.rating}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SingleRanking;
