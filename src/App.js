import './App.css';
import ChatPrompt from './components/chatPrompt';
import "./static/styles.css"
import "./index.css"
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Visionary</h1>
      <ChatPrompt />
    </div>
  );
}

export default App;
