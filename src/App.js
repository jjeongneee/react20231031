import React, { useState } from "react";
import { Button } from "@chakra-ui/react";

function App(props) {
  const [number, setNumber] = useState(0);

  function handlePlusButtonClick() {
    setNumber(number + 1);
  }

  function handleMinusButtonClick() {
    setNumber(number - 1);
  }

  return (
    <div>
      <input type="number" value={number} />
      <Button onClick={handlePlusButtonClick}>+</Button>
      <Button onClick={handleMinusButtonClick}>-</Button>
    </div>
  );
}

export default App;
