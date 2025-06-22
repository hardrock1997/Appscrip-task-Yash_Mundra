import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { navBarImagesUrl } from "../utils/imageUrls";

export default function Navbar() {
  return (
    <nav className={styles.horizontal_links} aria-label="Main navigation">
      {navBarImagesUrl.map(({ src, width, height, href, alt }, i) => (
        <Link key={i} href={href}>
          <Image
            src={src}
            width={width}
            height={height}
            alt={alt || `Navigation icon ${i + 1}`}
            priority={i === 0}
          />
        </Link>
      ))}
    </nav>
  );
}
