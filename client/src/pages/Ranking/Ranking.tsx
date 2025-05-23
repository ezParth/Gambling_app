import React, { useEffect, useState } from "react";
import SingleRanking from "./SingleRanking";

interface Batsman {
  batsman: string;
  country: string;
  rank: string;
  rating: number;
}

interface RankingData {
  odi: Batsman[];
  t20: Batsman[];
  test: Batsman[];
}

const Ranking: React.FC = () => {
  const [rankings, setRankings] = useState<RankingData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/api/ranking/get-batsman")
      .then((res) => res.json())
      .then((data) => {
        setRankings(data.ranking);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch rankings:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center py-10 text-gray-600">Loading Rankings...</div>;
  }

  if (!rankings) {
    return <div className="text-center py-10 text-red-500">Failed to load rankings.</div>;
  }

  return (
    <div className="h-full overflow-y-auto bg-[#f0f2f5] text-gray-800 p-6 rounded-2xl w-full">
      <div className="w-full max-w-3xl mx-auto space-y-8">
        <SingleRanking title="ODI Rankings" players={rankings.odi} />
        <SingleRanking title="T20 Rankings" players={rankings.t20} />
        <SingleRanking title="Test Rankings" players={rankings.test} />
      </div>
    </div>
  );
};

export default Ranking;
