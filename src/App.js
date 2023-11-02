import { Box, Flex, SimpleGrid } from "@chakra-ui/react";

function App() {
  /*
  Responsive Styles(반응형)
  base: "0em", // 0px
  sm: "30em", // ~480px. em is a relative unit and is dependant on the font size.
  md: "48em", // ~768px
  lg: "62em", // ~992px
  xl: "80em", // ~1280px
  "2xl": "96em", // ~1536px
   */

  return (
    <>
      <SimpleGrid spacing={"10px"} columns={{ base: 2, md: 3, "2xl": 6 }}>
        <Box bg="blue.300">Lorem.</Box>
        <Box bg="blue.300">Cumque!</Box>
        <Box bg="blue.300">Aliquid.</Box>
        <Box bg="blue.300">Aliquid?</Box>
        <Box bg="blue.300">Sapiente?</Box>
        <Box bg="blue.300">Velit?</Box>
        <Box bg="blue.300">Magnam!</Box>
        <Box bg="blue.300">Ratione!</Box>
        <Box bg="blue.300">Repellat.</Box>
        <Box bg="blue.300">Molestiae.</Box>
        <Box bg="blue.300">Iusto.</Box>
        <Box bg="blue.300">Maxime?</Box>
        <Box bg="blue.300">Pariatur.</Box>
        <Box bg="blue.300">Atque?</Box>
        <Box bg="blue.300">Veniam?</Box>
        <Box bg="blue.300">Minima.</Box>
        <Box bg="blue.300">Labore!</Box>
        <Box bg="blue.300">Id.</Box>
        <Box bg="blue.300">Voluptatum.</Box>
        <Box bg="blue.300">Incidunt?</Box>
        <Box bg="blue.300">Assumenda!</Box>
        <Box bg="blue.300">Qui?</Box>
        <Box bg="blue.300">Libero!</Box>
        <Box bg="blue.300">Necessitatibus.</Box>
        <Box bg="blue.300">Nemo!</Box>
        <Box bg="blue.300">Perspiciatis?</Box>
        <Box bg="blue.300">Totam?</Box>
        <Box bg="blue.300">Animi.</Box>
        <Box bg="blue.300">Ullam!</Box>
        <Box bg="blue.300">Magnam!</Box>
      </SimpleGrid>
    </>
  );
}

export default App;
