import React, { useRef } from "react";
import PollQuestion from "./PollQuestion";

const Poll: React.FC = () => {
  const questions = [
    {
      question: "🏆 Who will win the IPL 2025?",
      options: [
        { text: "Chennai Super Kings", votes: 30 },
        { text: "Mumbai Indians", votes: 25 },
        { text: "Royal Challengers Bangalore", votes: 20 },
        { text: "Kolkata Knight Riders", votes: 15 },
      ],
    },
    {
      question: "💡 Best young player of IPL 2025?",
      options: [
        { text: "Ruturaj Gaikwad", votes: 10 },
        { text: "Tilak Varma", votes: 8 },
        { text: "Yashasvi Jaiswal", votes: 12 },
        { text: "Rinku Singh", votes: 9 },
      ],
    },
    {
      question: "🔥 Most exciting match so far?",
      options: [
        { text: "CSK vs RCB", votes: 18 },
        { text: "MI vs KKR", votes: 14 },
        { text: "GT vs LSG", votes: 10 },
        { text: "RR vs SRH", votes: 9 },
      ],
    },
    {
      question: "🎯 Best captain of IPL 2025?",
      options: [
        { text: "MS Dhoni", votes: 22 },
        { text: "Hardik Pandya", votes: 18 },
        { text: "Shreyas Iyer", votes: 16 },
        { text: "Faf du Plessis", votes: 12 },
      ],
    },
    {
      question: "💥 Best bowler in IPL 2025?",
      options: [
        { text: "Mohammed Shami", votes: 20 },
        { text: "Rashid Khan", votes: 17 },
        { text: "Jasprit Bumrah", votes: 22 },
        { text: "Yuzvendra Chahal", votes: 14 },
      ],
    },
    {
      question: "🏏 Best batsman in IPL 2025?",
      options: [
        { text: "Virat Kohli", votes: 28 },
        { text: "Shubman Gill", votes: 23 },
        { text: "Ruturaj Gaikwad", votes: 21 },
        { text: "Suryakumar Yadav", votes: 19 },
      ],
    },
  ];

  const questionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollToNext = (index: number) => {
    const nextRef = questionRefs.current[index + 1];
    if (nextRef) {
      nextRef.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
<div className="h-full overflow-y-auto bg-[#f0f2f5] text-gray-800 p-6 rounded-2xl w-full">
  <div className="w-full max-w-xl mx-auto space-y-8">
    {questions.map((q, idx) => (
      <div key={idx} ref={(el) => (questionRefs.current[idx] = el)}>
        <PollQuestion
          question={q.question}
          options={q.options}
          onVote={() => scrollToNext(idx)}
        />
      </div>
    ))}
  </div>
</div>

  );
};

export default Poll;
