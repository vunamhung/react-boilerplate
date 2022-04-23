import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main className="text-center">
      <header className="flex h-[90vh] flex-col items-center justify-center">
        <img className="h-36" src="/images/logo.svg" alt="logo" />
        <p className="mb-8 text-6xl font-bold text-cyan-500">Hello Vite + React 18!</p>
        <p>
          <button className="mb-4 rounded border border-black px-2 py-1" onClick={() => setCount((c) => c + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          {' | '}
          <a className="App-link" href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener noreferrer">
            Vite Docs
          </a>
        </p>
      </header>
    </main>
  );
}
