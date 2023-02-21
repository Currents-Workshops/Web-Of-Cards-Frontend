import "./cards.css";
import React from "react";
import { Flex } from "@chakra-ui/react";

export default function Cards({
  cards,
  type,
  turn,
  sendJsonMessage,
  numberOfCards,
}) {
  switch (type) {
    case "opponent":
      const arrayToStoreNumberOfCards = new Array(numberOfCards <= 10 ? numberOfCards : 10 ).fill(null);
    //   making a null array to map
      return (
        <Flex minH="20vh" align="center" justify="center">
          <div className="playingCards">
            <ul className="hand">
              {arrayToStoreNumberOfCards.map((_, index) => (
                <li key={index}>
                  <div className="card back">
                    <span className="rank"></span>
                    <span className="suit"></span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Flex>
      );

    case "deck":
      let card = null;
      if(cards.length!==0) card = cards[cards.length-1]
      if(card == null)
      {
        return (
          <Flex minH="20vh" align="center" justify="center"></Flex>
        )
      }
      return (
        <>
          <Flex minH="20vh" align="center" justify="center">
            <div className="playingCards">
                <div
                  className={"card rank-" + card.number + " " + card.type}
                >
                  <span className="rank">{card.number}</span>
                  {card.type === "spades" && (
                    <span className="suit">&spades;</span>
                  )}
                  {card.type === "clubs" && (
                    <span className="suit">&clubs;</span>
                  )}
                  {card.type === "diams" && (
                    <span className="suit">&diams;</span>
                  )}
                  {card.type === "hearts" && (
                    <span className="suit">&hearts;</span>
                  )}
                </div>
            </div>
          </Flex>
        </>
      );
    case "player":
      return (
        <>
          <Flex minH="20vh" align="center" justify="center">
            <div className="playingCards">
              <ul className="hand">
                {cards.map((card, index) => {
                  return (
                    <li
                      onClick={
                        turn === true
                          ? () => {
                              sendJsonMessage({
                                type: "DropCard",
                                data: {
                                  card_index: index,
                                },
                              });
                            }
                          : null
                      }
                      key={card.id}
                    >
                      <div
                        className={"card rank-" + card.number + " " + card.type}
                      >
                        <span className="rank">{card.number}</span>
                        {card.type === "spades" && (
                          <span className="suit">&spades;</span>
                        )}
                        {card.type === "clubs" && (
                          <span className="suit">&clubs;</span>
                        )}
                        {card.type === "diams" && (
                          <span className="suit">&diams;</span>
                        )}
                        {card.type === "hearts" && (
                          <span className="suit">&hearts;</span>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Flex>
        </>
      );
    default:
      return <></>;
  }
}
