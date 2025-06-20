import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { navBarImagesUrl } from "../utils/imageUrls";

export default function Navbar() {
  return (
    <div className={styles.horizontal_links}>
      {navBarImagesUrl.map(({ src, width, height, href }, i) => {
        return (
          <Link key={i} href={href}>
            <Image
              src={src}
              width={width}
              height={height}
              alt={`navbar_image_${i}`}
            />
          </Link>
        );
      })}
    </div>
  );
}
