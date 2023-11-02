import { Box } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Box bg={"gold"} border={"1px solid purple"}>
        Lorem ipsum.
      </Box>
      <Box bg={"blue"} borderTop={"2px dotted green"}>
        Et, quas.
      </Box>
      <Box bg={"red"} borderBottom={"7px double yellow"}>
        Nobis, possimus?
      </Box>
      <Box borderX={"10px solid"} borderColor={"gray.600"}>
        Esse, ut!
      </Box>
      <Box borderY={"10px dotted"} borderColor={"red.300"}>
        Architecto, fuga.
      </Box>
      <Box border={"5px solid blue"} borderRadius={"30px"}>
        Quae, veniam?
      </Box>
      <Box border={"5px solid yellow"} borderRadius={"20%"}>
        Eius, maiores?
      </Box>
      <Box border={"5px solid black"} borderRadius={10}>
        Sint, ut!
      </Box>
      <Box border={"5px solid blue"} borderTopRadius={10}>
        Laborum, pariatur?
      </Box>
      <Box border={"5px solid green"} borderBottomRightRadius={10}>
        Alias, minima?
      </Box>
      <Box border={"5px solid purple"} borderBottomLeftRadius={10}>
        Consectetur, cum.
      </Box>
      <Box border={"5px solid blue"} borderTopRadius={10}>
        Consectetur, vel!
      </Box>
      <Box border={"5px solid red"} borderBottom={10}>
        Iusto, omnis.
      </Box>
      <Box shadow={"lg"}>Molestias, voluptates.</Box>
      <Box shadow={"xl"}>Dicta, tenetur.</Box>
      <Box shadow={"Dark lg"}>Aliquid, itaque!</Box>
      <Box bg={"blue.300"} m={"10px"}>
        Facilis, molestias!
      </Box>
      <Box bg={"yellow.600"} ml={"20px"}>
        Quidem, reiciendis?
      </Box>
      <Box bg={"facebook.500"} mx={"70px"}>
        Neque, tempora.
      </Box>
      <Box bg={"red.300"} my={"50px"}>
        Nulla, voluptas?
      </Box>
      {/*Box[bg][m]*5>lorem2*/}
      <Box bg="red.600" my="50px">
        Lorem ipsum.
      </Box>
      <Box bg="red.600" m="1">
        Ad, aut?
      </Box>
      <Box bg="blue.400" m="2">
        Excepturi, saepe.
      </Box>
      <Box bg="red.300" m="3">
        At, numquam.
      </Box>
      <Box bg="gray.400" m="4">
        Aliquid, perferendis.
      </Box>
      {/*Box[bg]*10>lorem2*/}
      <Box bg="red.400" px={"20px"}>
        Lorem ipsum.
      </Box>
      <Box bg="blue.400" py={"30px"}>
        Ipsa, odio!
      </Box>
      <Box bg="purple" p={1}>
        Explicabo, saepe.
      </Box>
      <Box bg="gold" p={10}>
        Earum, repudiandae!
      </Box>
      <Box bg="tomato" pb={"50px"}>
        Impedit, voluptas.
      </Box>
      <Box bg="red.600" pr={"100px"}>
        Consequatur, quod.
      </Box>
      <Box bg="blue.600">Eaque, vel.</Box>
      <Box bg="black">Dolorum, exercitationem?</Box>
      <Box bg="gray.300">Laboriosam, sapiente!</Box>
      <Box bg="skyblue">Aliquid, aperiam!</Box>
      <div
        style={{
          margin: "10px",
          backgroundColor: "gold",
          color: "gray",
          paddingLeft: "20px",
          boxShadow: "10px 5px 5px red",
        }}
      >
        Lorem ipsum.
      </div>
    </>
  );
}

export default App;
