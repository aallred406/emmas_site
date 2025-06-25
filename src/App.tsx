import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12 px-4">
      <div className="flex space-x-8 mb-8">
        <a
          href="https://vite.dev"
          target="_blank"
          className="hover:opacity-75 transition-opacity"
        >
          <img src={viteLogo} className="h-24 w-24" alt="Vite logo" />
        </a>
        <a
          href="https://react.dev"
          target="_blank"
          className="hover:opacity-75 transition-opacity"
        >
          <img
            src={reactLogo}
            className="h-24 w-24 animate-spin"
            alt="React logo"
          />
        </a>
      </div>

      <h1 className="text-6xl font-bold text-gray-800 mb-8 text-center">
        Vite + React + TailwindCSS
      </h1>

      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 mb-4"
        >
          count is {count}
        </button>
        <p className="text-gray-600 mb-4">
          Edit{" "}
          <code className="bg-gray-100 px-2 py-1 rounded text-sm">
            src/App.tsx
          </code>{" "}
          and save to test HMR
        </p>
      </div>

      <p className="text-gray-500 text-center mt-8 max-w-lg">
        Click on the Vite and React logos to learn more. This project is set up
        with TypeScript and TailwindCSS for Emma's site.
      </p>
    </div>
  );
}

export default App;
