import styles from "../styles/MainHeader.module.css";
import Image from "next/image";
import Link from "next/link";
import {
  mainHeaderLogoUrl,
  mainHeaderHorizontalGroupUrls,
  mainHeaderSubHorizontalGroupUrls
} from "../utils/imageUrls";
import Navbar from "./NavBar";

export default function MainHeader() {
  return (
    <div className={styles.container}>
      
      <div className={styles.logo_image}>
        <Link href="/">
          <Image
            src={mainHeaderLogoUrl}
            alt="main_header_logo"
            width={36}
            height={36}
          />
        </Link>
      </div>

      <div className={styles.central_heading}>LOGO</div>

      <div className={styles.horizontal_group}>
        {mainHeaderHorizontalGroupUrls.map((url, i) => (
          <Image
            key={i}
            src={url}
            alt="horizontal_group_on_main_header"
            width={24}
            height={24}
          />
        ))}

        <div className={styles.sub_group}>
          {mainHeaderSubHorizontalGroupUrls.map((url, i) => (
            <Image
              key={i}
              src={url}
              alt="sub_horizontal_group"
              width={52}
              height={16}
            />
          ))}
        </div>
      </div>

      <Navbar />
    </div>
  );
}
