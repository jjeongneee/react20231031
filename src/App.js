function App() {
  return (
    <div>
      <MyText
        style={{
          color: "pink",
          backgroundColor: "green",
          textAlign: "center",
          border: "5px solid gold",
        }}
        value="뭐쓰지"
      />
      <MyText
        style={{
          color: "yellow",
          backgroundColor: "purple",
          textAlign: "center",
          border: "5px solid gold",
        }}
        value="안녕"
      />
    </div>
  );
}

function MyText(props) {
  return (
    <div style={props.style}>
      <p>{props.value}</p>
    </div>
  );
}

export default App;
