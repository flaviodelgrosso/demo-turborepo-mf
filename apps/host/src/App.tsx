import React from 'react';
import './App.css';

const RemoteApp = React.lazy(() => import('remote/RemoteApp'));

const App = () => {
  return (
    <div className="content">
      <h1>Module Federation Demo</h1>
      <h2>Powered by Rsbuild and React</h2>
      <React.Suspense fallback="Loading Remote App">
        <RemoteApp />
      </React.Suspense>
    </div>
  );
};

export default App;
