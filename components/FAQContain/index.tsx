"use client"

import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQProps {
  questionAndAnswers: FAQ[];
  title: string
}

export function FAQContain({questionAndAnswers, title}: FAQProps) {

  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((itemIndex) => itemIndex !== index)
        : [...prev, index]
    );
  };


  return (
    <div className="w-full md:w-1/2">
      <h3 className="text-2xl font-semibold mb-4 text-dark-navy font-mono text-center">
        {title}
      </h3>
      {questionAndAnswers && questionAndAnswers?.map(({ question, answer }, index) => {
        const isItemOpen = openIndexes.includes(index);

        return (
          <div
            key={index}
            className="mb-6 cursor-pointer rounded-lg bg-dim-grey/10 p-4 transition-all duration-300 hover:bg-dim-grey/20"
            onClick={() => toggleItem(index)}
          >
            <div className="flex items-center justify-between">
              <h4 className="mb-2 text-lg font-semibold">{question}</h4>
              <img src="icons/chevron.svg" alt="icon chevron" className={`h-3 w-4 transition-transform duration-1000 ${isItemOpen ? "rotate-180" : ""}`} />
            </div>
            <div
              className={`grid overflow-hidden transition-[grid-template-rows,opacity,margin-top] duration-300 ease-in-out ${
                isItemOpen ? "mt-2 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0"
              }`}
            >
              <p className="min-h-0 text-sm">{answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
