import { Box, Flex } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Flex
        w={"100%"}
        h={"100px"}
        bg={"gray.300"}
        gap={1}
        align={"center"}
        justify={"space-around"}
      >
        <Box bg="gold">lorem</Box>
        <Box bg="red">lorem</Box>
        <Box bg="gray">lorem</Box>
        <Box bg="blue">lorem</Box>
        <Box bg="green">lorem</Box>
      </Flex>
    </>
  );
}

export default App;
