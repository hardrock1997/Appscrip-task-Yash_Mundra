import Image from "next/image";
import style from "../styles/MainText.module.css";

export default function MainText() {
  return (
    <section className={style.main_text}>
      <Image
        src="/main_text.svg"
        width={721}
        height={168}
        alt="Welcome to My Store - Discover top products and exclusive deals"
        priority
      />
    </section>
  );
}
