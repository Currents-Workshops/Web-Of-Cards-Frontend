

import React from 'react';
import { Box, Button, Flex, Input,  Stack  } from '@chakra-ui/react';

export default function JoinCreate({name,room,setName,setRoom,sendJsonMessage}) {

    //const [name, setName] = React.useState('');
    //const [room, setRoom] = React.useState('');
    const [nameborderfocus, setNameborderfocus] = React.useState(false);
    const [roomborderfocus, setroomborderfocus] = React.useState(false);
    //console.log(name, room);
    //console.log(nameborderfocus, roomborderfocus);
     

    

    return (
        <Flex
            bg="gray.100"
            minH="100vh"
            align="center"
            justify="center"
        >
            <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
                
                <Box
                    rounded="lg"
                    bg="blue.100"
                    boxShadow="lg"
                    p={8}
                >
                    <Stack spacing={4}>
                        <Input
                        isInvalid = {nameborderfocus}
                        bg={'gray.100'}
                        variant='outline'
                        placeholder='ENTER NAME'
                        _placeholder={{ opacity: 1, color: 'gray.500' }}
                        textColor={"black"}
                        onChange={(event) =>{
                            setNameborderfocus(false);
                            setroomborderfocus(false);
                            setName(event.target.value);
                        } }
                        required
                        />
                        <Input
                        isInvalid = {roomborderfocus}
                         bg={'gray.100'}
                         variant='outline'
                         placeholder='ENTER CODE'
                         _placeholder={{ opacity: 1, color: 'gray.500' }}
                         textColor={"black"}
                         onChange={
                            (event) => {
                                setRoom(event.target.value)
                                setNameborderfocus(false);
                                setroomborderfocus(false);
                            }
                        }
                        
                        />
                        <Button
                            bg="blue.400"
                            color="white"
                            _hover={{
                                bg: "blue.500"
                            }}
                            onClick = {()=>{
                                if (name && room) {
                                    sendJsonMessage({
                                        "type": "JoinGame",
                                        "data": {
                                            "game_code": room,
                                            "name":name
                                        }
                                    })
                                }
                                else if (name && !room) {
                                    setroomborderfocus(true);
                                }
                                else if (room && !name) {
                                    setNameborderfocus(true);
                                }
                                else if(!name && !room){
                                    setNameborderfocus(true);
                                    setroomborderfocus(true);
                                }
                            }}
                        >
                            JOIN
                        </Button>
                        <Button
                            bg="blue.400"
                            color="white"
                            _hover={{
                                bg: "blue.500"
                            }}
                            onClick = {()=>{
                                if (name) {
                                    sendJsonMessage({
                                        "type": "CreateGame",
                                        "data": {
                                            "name":name
                                        }
                                    })
                                }
                                else if (!name) {
                                    setNameborderfocus(true);
                                }
                            }}
                        >
                            CREATE
                        </Button>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    )
}

