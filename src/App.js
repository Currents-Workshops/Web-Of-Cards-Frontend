import './App.css';
import JoinCreate from './components/JoinCreate';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar isStartButtonVisble={"true"} />
      <JoinCreate/>
    </div>
  );
}

export default App;
