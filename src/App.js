import './App.css';
import Counter from './components/Counter/Counter';
import MoviesList from './components/MoviesList/MoviesList';

function App() {
  return (
    <div className="App">
      <Counter title="Counter 1" />
      {/* <Counter title="Counter 2" />
      <Counter title="Counter 3" /> */}
      <MoviesList />
    </div>
  );
}

export default App;
