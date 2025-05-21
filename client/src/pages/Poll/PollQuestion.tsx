import React, { useState } from "react";

interface Option {
  text: string;
  votes: number;
}

interface PollQuestionProps {
  question: string;
  options: Option[];
  onVote: () => void;
}

const PollQuestion: React.FC<PollQuestionProps> = ({ question, options, onVote }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [hasVoted, setHasVoted] = useState(false);
  const [votes, setVotes] = useState(options);

  const totalVotes = votes.reduce((sum, option) => sum + option.votes, 0);

  const handleVote = (optionText: string) => {
    if (hasVoted) return;

    const updatedVotes = votes.map((option) =>
      option.text === optionText ? { ...option, votes: option.votes + 1 } : option
    );

    setVotes(updatedVotes);
    setSelectedOption(optionText);
    setHasVoted(true);
    onVote(); // 👈 trigger scroll to next
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
      <h3 className="text-xl font-semibold text-indigo-600 text-center mb-4">
        {question}
      </h3>

      {!hasVoted ? (
        <div className="space-y-3">
          {votes.map((option) => (
            <button
              key={option.text}
              onClick={() => handleVote(option.text)}
              className="w-full py-2 px-4 bg-indigo-100 hover:bg-indigo-200 rounded-xl text-base font-medium transition"
            >
              {option.text}
            </button>
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {votes.map((option) => {
            const percent = ((option.votes / totalVotes) * 100).toFixed(1);
            const isUserChoice = option.text === selectedOption;

            return (
              <div key={option.text} className="w-full">
                <div className="flex justify-between text-sm mb-1">
                  <span className={isUserChoice ? "text-green-600 font-semibold" : ""}>
                    {option.text}
                  </span>
                  <span className="text-gray-600">{percent}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                  <div
                    className={`h-4 ${
                      isUserChoice ? "bg-green-400" : "bg-blue-400"
                    }`}
                    style={{ width: `${percent}%` }}
                  />
                </div>
              </div>
            );
          })}
          <p className="text-sm text-center mt-4 text-gray-500">
            Total votes: {totalVotes}
          </p>
        </div>
      )}
    </div>
  );
};

export default PollQuestion;
