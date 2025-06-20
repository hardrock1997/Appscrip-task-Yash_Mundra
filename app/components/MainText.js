import Image from "next/image"
import style from "../styles/MainText.module.css"
export default function MainText() {
    return (
        <div className={style.main_text}>
            <Image
            src="/main_text.svg"
            width={721}
            height={168}
            alt="main_text"
            />
        </div>
    )
}