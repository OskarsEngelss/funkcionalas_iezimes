import React from 'react';

const FormatExample = ({ answer }) => {
  return (
    <div>
      {answer.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
};

export default FormatExample;
