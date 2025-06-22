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
    <header className={styles.container}>
      <div className={styles.logo_image} role="banner">
        <Link href="/" aria-label="Home">
          <Image
            src={mainHeaderLogoUrl}
            alt="My Store Logo"
            width={36}
            height={36}
          />
        </Link>
      </div>

      <h1 className={styles.central_heading}>My Store</h1>

      <div className={styles.horizontal_group} role="group" aria-label="Header Navigation Icons">
        {mainHeaderHorizontalGroupUrls.map((url, i) => (
          <Image
            key={i}
            src={url}
            alt={`Header navigation icon ${i + 1}`}
            width={24}
            height={24}
          />
        ))}

        <div className={styles.sub_group} aria-label="Subgroup icons">
          {mainHeaderSubHorizontalGroupUrls.map((url, i) => (
            <Image
              key={i}
              src={url}
              alt={`Subgroup icon ${i + 1}`}
              width={52}
              height={16}
            />
          ))}
        </div>
      </div>

      <nav aria-label="Main site navigation">
        <Navbar />
      </nav>
    </header>
  );
}
