import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <p>count: {count}</p>
      <button
        type="button"
        className="p-4 bg-gray-300 text-white text-lg text-bold"
        onClick={() => setCount((prev) => prev + 1)}
      >
        click!
      </button>
    </main>
  );
};

export default App;
