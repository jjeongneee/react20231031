import aage, { city } from "./component/MyElem";
import MyContainer, { person, country } from "./component/MyBox";
// alt + ctrl + o 로 안쓰는 import 정리

function App() {
  return (
    <>
      <h1>{city}</h1>
      <h1>{aage}</h1>
      <MyContainer />
      <h1>
        {person.age}, {person.name}
      </h1>
      <h1>{country}</h1>
    </>
  );
}

export default App;
