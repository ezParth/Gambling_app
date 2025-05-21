import React, { useEffect, useRef, useState } from "react";
import getQuestion from "../../api/question";
import toast from "react-hot-toast";

const Quiz: React.FC = () => {
  const [question, setQuestion] = useState<string>("Click below to fetch quiz question!");
  const [answer, setAnswer] = useState<string>("");
  const [options, setOptions] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [quiz, setQuiz] = useState([]);
  const countRef: React.RefObject<number> = useRef(0);

  const handleOptionClick = (option: string) => {
    countRef.current += 1;
    if (!isAnswered) {
      setSelectedOption(option);
      setIsAnswered(true);
    }
  };

  const getOptionClass = (option: string) => {
    if (!isAnswered) return "hover:bg-blue-700 bg-blue-600";
    if (option === answer) return "bg-green-600";
    if (option === selectedOption && option !== answer) return "bg-red-600";
    return "bg-blue-600 opacity-70";
  };

  useEffect(() => {
    setTimeout(() => {
    if(countRef.current > 4) {
      fetchdata();
    } else if(countRef.current >= 1) {

        setQuestion(quiz[countRef.current].question);
        setAnswer(quiz[countRef.current].answer);
        setOptions(quiz[countRef.current].options);
        setSelectedOption(null);
        setIsAnswered(false);
        // countRef.current = 0;
      }
    }, 2200)
  }, [isAnswered])

  useEffect(() => {
    fetchdata();
  }, [])

  const fetchdata = async () => {
    try {
      const result = await getQuestion(); // result.Quiz => { question, answer, options }
      const quizData =  result.Quiz;
      
      console.log("Quiz: ", quiz)
      setQuestion(quizData[0].question);
      setAnswer(quizData[0].answer);
      setOptions(quizData[0].options);
      setSelectedOption(null);
      setIsAnswered(false);
      countRef.current = 0;
      setQuiz(result.Quiz);
      
      toast.success("✅ Data fetched successfully!");
    } catch (error) {
      console.log("Error in fetchdata: ", error);
      toast.error("❌ Failed to fetch data.");
    }
  };

  return (
<div className="max-h-screen flex ml-90 bg-[#f4f4f6] text-gray-900 font-sans p-6">
  <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
    <h1 className="text-3xl font-bold mb-6 text-center text-indigo-600">🎯 IPL Quiz Challenge</h1>

    <p className="text-xl font-medium mb-8 text-center">{question}</p>

    <button
      onClick={fetchdata}
      className="mb-6 w-full py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl font-semibold transition"
    >
      Fetch Data 🔄
    </button>

    <div className="space-y-4">
      {options.map((option) => (
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
        {selectedOption === answer ? (
          <span className="text-green-500 font-semibold">✅ Correct!</span>
        ) : (
          <span className="text-red-500 font-semibold">
            ❌ Oops! The correct answer is <span className="underline">{answer}</span>
          </span>
        )}
      </div>
    )}
  </div>
</div>

  );
};

export default Quiz;
