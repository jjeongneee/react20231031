import { Box, FormControl, Select } from "@chakra-ui/react";

function App(props) {
  return (
    <div>
      <Box w={"480px"}>
        <FormControl>
          <Select placeholder="선택하세요." multiple h={"120px"}>
            {/*option[value=value$]*5>lorem1*/}
            <option value="value1">Lorem.</option>
            <option value="value2">Molestias!</option>
            <option value="value3">Veritatis!</option>
            <option value="value4">Repellendus.</option>
            <option value="value5">Libero.</option>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}

export default App;
