function App() {
  return (
    <div>
      {/* MyBox 컴포넌트 2번 사용해보기 */}
      <MyBox
        p={"50px"}
        m={"30px"}
        bg={"black"}
        color={"white"}
        text={"배고프다"}
      />
      <MyBox
        p={"20px"}
        m={"10px"}
        bg={"lightgreen"}
        color={"black"}
        text={"기운나다"}
      />
    </div>
  );
}

function MyBox({ p, m, bg, color, text }) {
  console.log(text, "안나와");
  return (
    <div style={{ padding: p, margin: m, color: color, backgroundColor: bg }}>
      <p>{text}</p>
    </div>
  );
}

export default App;
