import React from 'react';
import LongAnswer from './LongAnswer';
import FormatExample from './FormatExample';
import Questions_answers from './Questions_answers';

const CombinedQuestions_Answers = () => {
  const questionsAndAnswers = Questions_answers();

  return (
    <div className="answer_container">
      {questionsAndAnswers.map((item, index) => {
        return (
          <div key={index} className="answer">
            <h2>{item.question}</h2>
            {item.type === 'longAnswer' ? (
              <LongAnswer answer={item.answer} />
            ) : (
              <FormatExample answer={item.answer} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CombinedQuestions_Answers;
