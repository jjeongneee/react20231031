import React, { useState } from "react";
import * as PropTypes from "prop-types";
import { Box, Input, Text } from "@chakra-ui/react";

function MyInput({ value, onChange }) {
  return (
    <Box>
      <Input value={value} onChange={(e) => onChange(e.target.value)} />
    </Box>
  );
}

function MyText({ text }) {
  return (
    <Box>
      <Text>{text}</Text>
    </Box>
  );
}

// 상태 관리:
// App 컴포넌트에서는 useState 훅을 사용하여 address라는 상태를 초기화합니다. 이 상태는 현재 입력된 주소를 나타냅니다.
// handleInputChange 함수는 MyInput 컴포넌트에서 발생한 입력값을 받아와 setAddress를 통해 상태를 업데이트합니다.
function App(props) {
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <MyInput value={address} onChange={(text) => setAddress(text)} />
      <MyText text={address} />
      <hr />
      <MyInput value={email} onChange={(text) => setEmail(text)} />
      <MyText text={email} />
    </div>
  );
}

export default App;
