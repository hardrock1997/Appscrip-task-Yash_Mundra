import styles from "../styles/Footer.module.css"
import Image from "next/image"

export default function Footer() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.above_part}>
                <Image
                src="Be the first to know.svg"
                alt="footer_text"
                width={201}
                height={24}
                style={{position:"absolute",top:"79px",left:"128px"}}
                />
                <Image
                src="Sign up for updates from mettā muse..svg"
                alt="footer_text"
                width={201}
                height={19}
                style={{position:"absolute",top:"127px",left:"128px",color:"#FFFFFF",fontFamily:"Simplon Norm', sans-serif",fontWeight:"400",fontSize:"16px",lineHeight:"100%"}}
                />
                <Image
                src="Subscribe.svg"
                alt="footer_text"
                width={384}
                height={47}
                style={{position:"absolute",top:"197px",left:"128px"}}
                />
            </div>
            <div className={styles.divider}></div>
             <div className={styles.below_part}>

            </div>
        </div>
    )
}