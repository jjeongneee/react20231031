import React from "react";
import { Button } from "@chakra-ui/react";

function App(props) {
  function handleClick(e) {
    // a 태그 클릭시 naver로 이동할 수 있게 메소드 작성
    e.preventDefault();
    window.location.href = "http://www.naver.com";
    console.log("다른 일을 시킴");
  }
  return (
    <div>
      <a href="http://www.daum.net" onClick={handleClick}>
        <Button>다음으로 이동</Button>
      </a>
    </div>
  );
}

export default App;
