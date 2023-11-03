import { useState } from "react";

function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  function num1(e) {
    setNumber1(Number(e.target.value));
  }

  function num2(e) {
    setNumber2(Number(e.target.value));
  }

  let result = number1 + number2;
  return (
    <>
      <input type="number" onChange={num1} /> +
      <input type="number" onChange={num2} />= {result}
    </>
  );
}

export default App;
