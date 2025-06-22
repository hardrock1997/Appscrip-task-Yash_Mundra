import styles from "../styles/Products.module.css";
import ProductCard from "../components/ProductCard";

export default function Products({ toggleSideFilters, products, categories, loading }) {
  return (
    <section
      className={`${styles.container} ${!toggleSideFilters ? styles.container_fullWidth : ''}`}
      aria-labelledby="product-list-heading"
    >

      {loading ? (
        <p className={styles.loading_text}>Loading...</p>
      ) : (
        products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </section>
  );
}
