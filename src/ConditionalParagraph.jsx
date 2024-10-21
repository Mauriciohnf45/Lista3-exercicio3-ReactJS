import React from 'react';

const ConditionalParagraph = ({ isVisible }) => {
  return (
    <div>
      {isVisible && <p>Este parágrafo é visível!</p>}
    </div>
  );
};

export default ConditionalParagraph;
