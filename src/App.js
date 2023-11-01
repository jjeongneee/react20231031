import Box, { color } from "./component/Box";
import Container, { color as colorA } from "./component/Container";

function App() {
  return (
    <div>
      <Box style={{ color: color }} />
      <Container style={{ color: colorA }} />
    </div>
  );
}

export default App;
