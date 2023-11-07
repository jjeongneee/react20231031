import React, { useState } from "react";
import * as PropTypes from "prop-types";
import { Box, Input, Text } from "@chakra-ui/react";

function MyInput({ address, onChange }) {
  return (
    <Box>
      <Input value={address} onChange={(e) => onChange(e.target.value)} />
    </Box>
  );
}

function MyText({ address }) {
  return (
    <Box>
      <Text>{address}</Text>
    </Box>
  );
}

// 상태 관리:
// App 컴포넌트에서는 useState 훅을 사용하여 address라는 상태를 초기화합니다. 이 상태는 현재 입력된 주소를 나타냅니다.
// handleInputChange 함수는 MyInput 컴포넌트에서 발생한 입력값을 받아와 setAddress를 통해 상태를 업데이트합니다.
function App(props) {
  const [address, setAddress] = useState("");

  return (
    <div>
      <MyInput address={address} onChange={(text) => setAddress(text)} />
      <MyText address={address} />
    </div>
  );
}

export default App;
