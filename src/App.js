import "./App.css";
import CardsWrapper from "./components/CardsWrapper";

function App() {
  return (
    <div className="App">
      <CardsWrapper cardsNumber="9" />
      <CardsWrapper cardsNumber="8" />
      <CardsWrapper cardsNumber="7" />
    </div>
  );
}

export default App;
