import mainStyle from "./main.module.scss";
import Card from "./card";
export default function Main() {
  return (
    <div className={mainStyle["container"]}>
      <p className={mainStyle["header"]}>WHO ARE YOU ?</p>
      <Card />
    </div>
  );
}
