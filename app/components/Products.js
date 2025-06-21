import styles from "../styles/Products.module.css";
import ProductCard from "../components/ProductCard";

export default function Products({ toggleSideFilters, products, categories, loading }) {
  return (
    <div className={`${styles.container} ${!toggleSideFilters ? styles.container_fullWidth : ''}`}>
      {loading ? (
        <h1 className={styles.loading_text}>Loading</h1>
      ) : (
        products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </div>
  );
}
