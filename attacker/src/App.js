import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [companyApp, setCompanyApp] = useState(null); // State to store the reference to the opened window

  const openCompanyApp = () => {
    // Open the imitation company app
    const newCompanyApp = window.open("http://localhost:3002", "companyApp");
    setCompanyApp(newCompanyApp); // Store the reference to the opened window
  };

  const sendMessage = () => {
    if (companyApp) {
      // Send a message to the opened window if it's available
      companyApp.postMessage("Hello from the attacker app!", "*");
    } else {
      alert("Company app is not open!");
    }
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={openCompanyApp}>Open Company App</button>
        <button onClick={sendMessage}>Send Message to Company App</button>{" "}
        {/* New button */}
      </header>
    </div>
  );
}

export default App;
