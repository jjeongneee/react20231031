import React, { useState } from "react";
import { Button } from "@chakra-ui/react";

// component를  밖으로 꺼내서 쓰는 것은 권장하지 않음
let out = 0;

function MyComp() {
  const [num, setNum] = useState(0);
  let a = 3;

  out++;

  console.log("a", a);
  console.log("num", num);
  console.log("out", out);

  return (
    <div>
      <Button onClick={() => setNum(num + 1)}>증가</Button>
      <p>{num}</p>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <MyComp />
    </div>
  );
}

export default App;
