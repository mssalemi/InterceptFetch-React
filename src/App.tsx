import { useMemo } from "react";
import logo from "./logo.svg";
import "./App.css";

import { useFetch } from "./hooks/useFetch/useFetch";
import { useInterceptor } from "./hooks/useInterceptor/useInterceptor";

function App() {
  const { intercepted, useInterceptedFetch, useDefaultFetch } =
    useInterceptor();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        Learn React - Fetch = {intercepted ? "Intercepted" : "Default"}
        <button onClick={useInterceptedFetch}>
          Update to Intcerpted Fetch Fetch Method
        </button>
        <button onClick={useDefaultFetch}>
          Update to Default Fetch Fetch Method
        </button>
        <button onClick={useFetch}>Fetch Data</button>
      </header>
    </div>
  );
}

export default App;
