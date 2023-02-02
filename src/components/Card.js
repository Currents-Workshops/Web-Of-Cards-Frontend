import { React } from "react";

const CenterCardElement = ({ number, symbol, name }) => {
  return (
    <>
      {[...Array(Number(number))].map((_symb, index) => {
        index += 1;
        return (
          <span className="centerCard" key={index}>
            <span className="center-symbol-sigle">
              {number >= 0 && number <= 10 ? symbol : ""}
            </span>
          </span>
        );
      })}
      {/* {""} */}
    </>
  );
};

const BorderCardFigureConditions = ({ number }) => {
  return (
    <p>
      {number === 11 ? "J" : number === 12 ? "Q" : number === 13 ? "K" : number}
    </p>
  );
};

const Card = ({ number, color, symbol, name }) => {
  return (
    <div className="card-container">
      <div className={`card-content__inner ${name}`}>
        <div className={`card-content-inner__border-top ${color}`}>
          <div className="top-symbol ">
            <BorderCardFigureConditions number={number} />
            <span className="top-symbol-sigle">{symbol}</span>
          </div>
          <div />
        </div>
        <div className={`card-content-inner__center grid-${number} ${color}`}>
          <CenterCardElement number={number} symbol={symbol} name={name} />
        </div>
        <div className={`card-content-inner__border-bottom ${color}`}>
          <div />
          <div className="bottom-symbol ">
            <span className="bottom-symbol-sigle">{symbol}</span>
            <BorderCardFigureConditions number={number} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
