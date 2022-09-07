import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
const App = () => {
  return (
    <div>
      <h1>we need to log into spotify bro</h1>
      <a href='/login'>click my button</a>
    </div>
  );
};
root.render(<App />);
