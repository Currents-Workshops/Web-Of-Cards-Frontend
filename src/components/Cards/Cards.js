import './cards.css';
import React from 'react';
import { Flex } from '@chakra-ui/react';

export default function Cards ({cards,type,turn,sendJsonMessage}) {
    switch (type) {
        case "opponent":
            return <></>;
        case "deck":
            return (
                <>
                <Flex
                    minH="20vh"
                    align="center"
                    justify="center"
                >
                <div className="playingCards">
                <ul className="hand">
                    {
                        cards.map((card,index)=>{
                            return (
                                <li  key={card.id}>
                                    <div className={"card rank-"+card.number+" "+card.type}>
                                        <span className="rank">{card.number}</span>
                                        {card.type === "spades" && <span className="suit">&spades;</span>}
                                        {card.type === "clubs" && <span className="suit">&clubs;</span>}
                                        {card.type === "diams" && <span className="suit">&diams;</span>}
                                        {card.type === "hearts" && <span className="suit">&hearts;</span>}
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                </div>
                </Flex>
                </>
            )
        case "player":
            return (
                <>
                <Flex
                    minH="20vh"
                    align="center"
                    justify="center"
                >
                <div className="playingCards">
                <ul className="hand">
                    {
                        cards.map((card,index)=>{
                            return (
                                <li onClick={turn === true ? ()=>{
                                    sendJsonMessage({
                                    "type": "DropCard",
                                    "data": {
                                        "card_index":index
                                    }
                                })}: null} key={card.id}>
                                    <div className={"card rank-"+card.number+" "+card.type}>
                                        <span className="rank">{card.number}</span>
                                        {card.type === "spades" && <span className="suit">&spades;</span>}
                                        {card.type === "clubs" && <span className="suit">&clubs;</span>}
                                        {card.type === "diams" && <span className="suit">&diams;</span>}
                                        {card.type === "hearts" && <span className="suit">&hearts;</span>}
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                </div>
                </Flex>
                </>
            )
        default:
            return <></>;
    }
}
