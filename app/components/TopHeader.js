import styles from "../styles/TopHeader.module.css";
import Image from "next/image";
import { imageUrlsForTopHeaderImage } from "../utils/imageUrls";

export default function TopHeader() {
  return (
    <header className={styles.header_wrapper} role="banner" aria-label="Top logos">
      {imageUrlsForTopHeaderImage.map((_, i) => {
        if (i % 2 !== 0) return null;

        const img1 = imageUrlsForTopHeaderImage[i];
        const img2 = imageUrlsForTopHeaderImage[i + 1];

        return (
          <div className={styles.image_row} key={i}>
            {img1 && (
              <div className={styles.image_1}>
                <Image
                  src={img1.src}
                  alt={img1.alt || `Top Header Logo ${i + 1}`}
                  width={img1.width}
                  height={img1.height}
                  priority
                />
              </div>
            )}
            {img2 && (
              <div className={styles.image_2}>
                <Image
                  src={img2.src}
                  alt={img2.alt || `Top Header Logo ${i + 2}`}
                  width={img2.width}
                  height={img2.height}
                  priority
                />
              </div>
            )}
          </div>
        );
      })}
    </header>
  );
}
