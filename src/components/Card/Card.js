import './cards.css';

import React from 'react';
import { Box, Button, Flex, Input,  Stack  } from '@chakra-ui/react';
export default function Card () {
    return (
        <>
        <Flex
            bg="gray.100"
            minH="10vh"
            align="center"
            justify="center"
        >
        <div class="playingCards">
        <ul class="hand">
            <li>
            <div class="card rank-7 spades">
                <span class="rank">7</span>
                <span class="suit">&spades;</span>
            </div>
            </li>
            <li>
            <div class="card rank-7 spades">
                <span class="rank">7</span>
                <span class="suit">&spades;</span>
            </div>
            </li>
        </ul>
        </div>
        </Flex>
        <div class="playingCards">
            <div class="card rank-7 spades">
                <span class="rank">7</span>
                <span class="suit">&spades;</span>
            </div>
        </div>
        <div class="playingCards">
            <div class="card rank-7 spades">
                <span class="rank">7</span>
                <span class="suit">&spades;</span>
            </div>
        </div>
        <div class="playingCards">
            <div class="card rank-9 spades">
                <span class="rank">9</span>
                <span class="suit">&spades;</span>
            </div>
        </div>
        </>
    )
}
