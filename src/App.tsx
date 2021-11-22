import React, { Suspense } from 'react';
import Routes from "./routes";
import './assets/styles/main.scss';

function App() {
  return (
      <div className="App">
          <Suspense fallback={<div>Loading...</div>}>
              <Routes/>
          </Suspense>
      </div>
  );
}

export default App;
