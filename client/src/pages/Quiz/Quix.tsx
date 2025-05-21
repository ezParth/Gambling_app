import React, { useState } from "react";
import getQuestion from "../../api/question";

const Question = "Who is the Most Popular Cricketer in the World";
const Answer = "Virat Kohli";
const Options = ["AB de Villiers", "Chris Gayle", "Virat Kohli", "Rohit Sharma"];

const Quiz: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleOptionClick = (option: string) => {
    if (!isAnswered) {
      setSelectedOption(option);
      setIsAnswered(true);
    }
  };

  const getOptionClass = (option: string) => {
    if (!isAnswered) return "hover:bg-blue-700 bg-blue-600";
    if (option === Answer) return "bg-green-600";
    if (option === selectedOption && option !== Answer) return "bg-red-600";
    return "bg-blue-600 opacity-70";
  };

  const fetchdata = async () => {
    try {
      const result = await getQuestion();
      console.log("Result: ",result);
    } catch (error) {
      console.log("Error in fetchdata: ", error);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1e1e2f] to-[#0f0f17] text-white font-sans p-6">
      <div className="w-full max-w-xl bg-[#10101a] rounded-2xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-yellow-400">🎯 IPL Quiz Challenge</h1>
        <p className="text-xl font-medium mb-8 text-center">{Question}</p>
        <button onClick={fetchdata}>fetch data dued</button>
        <div className="space-y-4">
          {Options.map((option) => (
            <button
              key={option}
              onClick={() => handleOptionClick(option)}
              className={`w-full py-3 rounded-xl text-lg transition duration-300 ${getOptionClass(option)}`}
              disabled={isAnswered}
            >
              {option}
            </button>
          ))}
        </div>

        {isAnswered && (
          <div className="mt-6 text-center text-xl">
            {selectedOption === Answer ? (
              <span className="text-green-400 font-semibold">✅ Correct!</span>
            ) : (
              <span className="text-red-400 font-semibold">
                ❌ Oops! The correct answer is <span className="underline">{Answer}</span>
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
