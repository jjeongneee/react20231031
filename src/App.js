import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Button,
  SimpleGrid,
  Tbody,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Center,
  Circle,
  Square,
} from "@chakra-ui/react";
import React from "react";
import { PhoneIcon, SunIcon } from "@chakra-ui/icons";

function App() {
  return (
    <>
      <Center bg={"red.100"} h={"200px"}>
        <Square bg={"blue.100"} w={"100px"} h={"100px"}>
          <SunIcon />
        </Square>
      </Center>

      <Center bg={"red.200"} h={"200px"}>
        <Circle bg={"blue.200"} w={"100px"} h={"100px"}>
          <PhoneIcon />
        </Circle>
      </Center>
    </>
  );
}

export default App;
