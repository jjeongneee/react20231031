import { MyText } from "./component/MyText";
import { MyBox } from "./component/MyBox";
import { MyNavbar } from "./component/MyNavbar";
import { MyContainer } from "./component/MyContainer";

function App() {
  return (
    <div>
      {/*아래 네개의 컴포넌트를 src/component 폴더에 만들기*/}
      <MyText color="pink" bg="black" textAlign="center" />
      <MyBox />
      <MyContainer />
      <MyNavbar />
    </div>
  );
}

export default App;
