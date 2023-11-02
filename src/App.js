import { Button } from "@chakra-ui/react";
import { ArrowRightIcon, EmailIcon } from "@chakra-ui/icons";

function App() {
  return (
    <>
      <Button colorScheme="blue">Lorem.</Button>
      <Button colorScheme="red">Lorem.</Button>
      <Button colorScheme="yellow">Natus!</Button>
      <Button colorScheme="orange">Rerum.</Button>
      <Button colorScheme="teal" size={"sm"}>
        Suscipit.
      </Button>
      <Button colorScheme="cyan" size={"lg"}>
        Itaque.
      </Button>
      <Button colorScheme="messenger" variant={"outline"}>
        Veritatis.
      </Button>
      <Button colorScheme="orange" variant="ghost">
        Aliquid!
      </Button>
      <Button variant={"link"}>Odit?</Button>
      <Button leftIcon={<EmailIcon />}>Mollitia.</Button>
      <Button rightIcon={<ArrowRightIcon />}>Non!</Button>
      <Button isLoading={true}>Quos.</Button>
      <Button isLoading loadingText={"전송중"}>
        Minima.
      </Button>
      <Button>Quae!</Button>
      <Button>Iusto?</Button>
      <Button>Dolor.</Button>
      <Button>Placeat?</Button>
      <Button>Quisquam!</Button>
      <Button>Dignissimos!</Button>
      <Button>Accusamus.</Button>
      <Button>Cupiditate.</Button>
      <Button>Libero?</Button>
      <Button>Ratione.</Button>
      <Button>Sed.</Button>
      <Button>Odit.</Button>
      <Button>Expedita.</Button>
      <Button>Atque!</Button>
      <Button>Ipsa.</Button>
      <Button>Cum?</Button>
      <Button>Totam?</Button>
      <Button>Sunt.</Button>
    </>
  );
}

export default App;
