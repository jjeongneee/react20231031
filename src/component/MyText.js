import css from "../style/mystyle.module.css";
export function MyText() {
  return (
    <div>
      {/* red 배경색, white 글자색 */}
      {/* src/style/mystyle.module.css 파일 생성 */}
      {/* MyText.js에서 mystyle.module.css import 하기 */}
      {/* 템플릿 리터럴방법*/}
      <h1 className={`${css.error} ${css.special} ${css.coffee}`}>
        Lorem ipsum dolor sit amet.
      </h1>
      {/* array join 메서드 쓰는 방법 */}
      <h1 className={[css.error, css.special, css.coffee].join(" ")}>
        Lorem ipsum dolor sit amet.
      </h1>
    </div>
  );
}
