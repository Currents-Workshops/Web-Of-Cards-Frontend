/* import Cards from "./Card";
import { numbers, colors, symbols } from "./data";
// import useRandomValueFromArray from "../hook/randomvalue";

const CardsWrapper = ({ cardsNumber }) => {
  const cardNumbers = cardsNumber;
  // const { randomValueFromArray } = useRandomValueFromArray();

  return (
    <div className="card-wrapper">
      {[...Array(Number(cardNumbers))].map((_numb, index) => {
        index += 1;
        const randomSymbols =
          symbols[Math.floor(Math.random() * symbols.length)];

        return (
          <Cards
            key={index}
            // name={randomSymbols.name}
            // number={randomValueFromArray(numbers).number}
            // color={
            //   randomSymbols.name === "spade" || randomSymbols.name === "club"
            //     ? `${colors[1].color}`
            //     : `${colors[0].color}`
            // }
            rank={Math.ceil(Math.random() * 10 + 1)}
            // symbol={randomSymbols.symbol}
            symbol={randomSymbols.name}
          />
        );
      })}
    </div>
  );
};

export default CardsWrapper;
 */