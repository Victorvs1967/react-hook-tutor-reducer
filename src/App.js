import './App.css';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';

const App = () => (
  <div className="App">
    <header className="App-header">React Hook Tutor</header>
    <main className="App-main">
      <CounterOne />
      <CounterTwo />
    </main>
    <footer className="App-footer">by Nabendu</footer>
  </div>
);

export default App;
