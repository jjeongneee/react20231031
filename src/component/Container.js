// export default Container;

// default export는 이름 없어도 됨
// 그러나 문제가 생겼을 때 추적이 어려움
// export default function ({ style })
export default function Container({ style }) {
  return (
    <div style={style}>
      <h1>후훟</h1>
    </div>
  );
}

export const color = "yellow";
