

import React from 'react';
import { Box, Button, HStack, Flex, Input,  Stack, Link, Image, Spacer, Text  } from '@chakra-ui/react';
import { transparentize } from "@chakra-ui/theme-tools";

export default function JoinCreate({name,room,setName,setRoom,sendJsonMessage}) {

    //const [name, setName] = React.useState('');
    //const [room, setRoom] = React.useState('');
    const [nameborderfocus, setNameborderfocus] = React.useState(false);
    const [roomborderfocus, setroomborderfocus] = React.useState(false);
    const image = "currents-23-logo-white"
     

    

    return (
        <Flex
            bgGradient={`linear(to-r, #004052, #002029)`}
            minH="100vh"
            align="center"
            justify="center"
            width={"100%"}
        >
            <HStack
                h={"73px"}
                borderBottomWidth={"1px"}
                borderColor={"#00000011"}
                bg={transparentize("gray.900", 0.7)}
                py={8}
                px={[4, 8, 16, 24, 32]}
                pos={"fixed"}
                top="0"
                w={"100%"}
                spacing={6}
                backdropFilter={"auto"}
                backdropBlur={"md"}
                zIndex={1}
            >
                <Link href={"currents.nitt.edu"} style={{ cursor: "pointer" }}>
                    <Image src={`/${image}.png`} alt={"Currents Logo"} width={45} height={45} />
                </Link>
                <Spacer />
                <Text fontFamily={"DuneRise"} align="center">
                    WEB OF CARDS
                </Text>
            </HStack>
            <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
                
                <Box
                    rounded="lg"
                    bg="#00303D"
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
                            bg="rgba(0, 64, 82, 0.3)"
                            color="white"
                            _hover={{
                                bg: "rgba(0, 64, 82, 1)"
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
                            bg="rgba(0, 64, 82, 0.3)"
                            color="white"
                            _hover={{
                                bg: "rgba(0, 64, 82, 1)"
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

