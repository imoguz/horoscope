import mainStyle from "./main.module.scss";
import { data } from "../../helper/data";
export default function Card() {
  console.log(data);
  return (
    <div className={mainStyle.cardCont}>
      {data.map((item) => (
        <div className={mainStyle.card} key={item.id}>
          <span className={mainStyle["card-title"]}>{item.title}</span>
          <img className={mainStyle["image"]} src={item.image} alt="" />
          <div className={mainStyle["overlay-text"]}>
            <p>{item.desc}</p>
          </div>
          <div className={mainStyle["card-date"]}>
            <span>{item.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
