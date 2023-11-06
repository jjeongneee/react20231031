import React, { useState } from "react";
import { Box, Input, Text } from "@chakra-ui/react";

function App(props) {
  // useState Hook을 사용해 상태 변수 초기화
  // useState를 사용하여 username, email, address 세 가지 상태 변수를 초기화합니다.
  // setUsername, setEmail, setAddress 함수를 통해 각각의 상태를 업데이트합니다.
  const [username, setUsername] = useState("");
  // const email = ""; // state로 바꾸기
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState();

  console.log(username);
  console.log(email);

  // Input 요소 및 이벤트 핸들러 함수 정의
  // handleUserNameChange와 handleEmailChange 함수는 입력 필드에 대한 변경 이벤트를 처리합니다.
  // 입력 필드 값이 변경될 때마다 setUsername 및 setEmail 함수를 호출하여 각 상태를 업데이트합니다.
  function handleUserNameChange(e) {
    setUsername(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  return (
    <div>
      // Input 컴포넌트를 이용한 입력 폼 구성: // Chakra UI의 Input 컴포넌트를
      사용하여 각 입력 필드를 만듭니다. // value 속성을 이용해 입력 필드의 값이
      상태 변수와 동기화됩니다. // onChange 속성을 이용하여 입력 값이 변경될
      때마다 이벤트 핸들러 함수가 호출되도록 설정합니다.
      <Box>
        <Input type="text" value={username} onChange={handleUserNameChange} />
      </Box>
      <Box>
        <Input type="text" value={email} onChange={handleEmailChange} />
      </Box>
      <Text>
        {username}의 email은 {email} 입니다. 주소는 {address} 입니다.
      </Text>
      <Box>
        <Input
          type="text"
          value={address}
          // arrow function으로 나타냄
          onChange={(e) => setAddress(e.target.value)}
        />
      </Box>
    </div>
  );
}

export default App;
