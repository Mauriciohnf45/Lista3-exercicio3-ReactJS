import React from 'react';
import ConditionalParagraph from './ConditionalParagraph';

function App() {
  return (
    <div>
      <h1>Renderização Condicional</h1>
      <ConditionalParagraph isVisible={true} />
    </div>
  );
}

export default App;
