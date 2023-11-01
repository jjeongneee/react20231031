function App() {
  return (
    <div>
      <MyComp m="30px" p="10px" color="gold" bg="black" text="hello react" />
      <MyComp m="30px" bg="black" text="밥 언제먹냐" />
      <MyComp m="30px" bg="black" text="오늘은" />
      <MyComp p="10px" color="gold" text="날이 흐리네" />
      <MyComp p="10px" color="gold" />
    </div>
  );
}

function MyComp({
  m = "20px",
  p = "15px",
  color = "purple",
  bg = "green",
  text = "no content",
}) {
  return (
    <div style={{ margin: m, padding: p, color: color, backgroundColor: bg }}>
      <p>{text}</p>
    </div>
  );
}

export default App;
