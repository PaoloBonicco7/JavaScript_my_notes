import './App.css';

function App() {
  return (
    <div className="App">
      <h1>People entered:</h1>
        <h2 id="counter-el">0</h2>

          document.getElementById("counter-el").innerText = 5;
    </div>
  );
}

export default App;