import logo from './logo.svg';
import './App.css';
import Speech from './components/Speech.js';

function App() {
  var objSpeech = new Speech();
  
  objSpeech.init();

  return (
    <div className="App">
      <button onClick={() => objSpeech.speak("Hello World")}>Hello</button>
    </div>
  );
}

export default App;
