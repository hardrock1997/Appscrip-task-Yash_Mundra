import styles from "../styles/ProductCard.module.css";
import Image from "next/image";
import {
  productCardDownText,
  productCardDownText_2,
} from "../utils/constants";

export default function ProductCard({ product }) {
  return (
    <div className={styles.container}>
      <Image
        src={product.image}
        width={290}
        height={300}
        alt="product_image"
      />

      <div className={styles.product_card_bottom}>
        <div className={styles.product_name_truncation}>
          {product.title}
        </div>

        <div>
          <span className={styles.down_text_2}>{productCardDownText}</span>
          <span className={styles.down_text}>{productCardDownText_2}</span>
        </div>
      </div>
    </div>
  );
}
