function App() {
  // const myStyle = {
  //   display: "flex",
  //   color: "pink",
  //   fontSize: "40px",
  //   textAlign: "center",
  //   fontWeight: "bold",
  //   justifyContent: "space-evenly",
  // };
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <MyComp />
      <MyComp />
      <MyComp />
    </div>
  );
}

function MyComp() {
  const name = "흥민";
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "10px",
        width: "25%",
        textAlign: "center",
      }}
    >
      {" "}
      {name}
    </div>
  );
}
export default App;
