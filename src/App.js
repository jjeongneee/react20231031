// 컴포넌트

function App() {
  return (
    <div>
      <MyElem name="흥민" age={44} team="토트넘" />
      <MyElem name="강인" age={33} team="파리" />
    </div>
  );
}
// 변수명(props) 그냥 써도 되고 나눠서 받고싶으면 { name, age, team }으로 나눠쓰기
// 나눠쓰는건 구조분해할당!!!!!!!
function MyElem({ name, age, team }) {
  return (
    <div>
      <h1>
        {name}은 {age}살이며 {team}소속이다.
      </h1>
    </div>
  );
}

export default App;
