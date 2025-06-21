"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Body.module.css";
import useFetchProducts from "../hooks/useFetchProducts";
import useFetchProductCategories from "../hooks/useFetchProductCategories";
import {
  hideFilterText,
  dropDownText,
  showFilterText,
  categoryWiseProductsUrl,
} from "../utils/constants";

import SideFilter from "./SideFilters";
import Products from "./Products";

export default function Body() {
  const [products, error, loading, setProducts, productsCopy] = useFetchProducts();
  const [categories, setCategories] = useFetchProductCategories();
  const [toggleSideFilters, setToggleSideFilters] = useState(true);

  const handleToggleSideFilters = () => {
    setToggleSideFilters((prev) => !prev);
  };

  const getSelectedProductsCategory = () => {
    return categories.filter((cat) => cat.checked === true);
  };

  async function fetchProductsForThisCategory(category) {
    const res = await fetch(`${categoryWiseProductsUrl}${category.name}`);
    return res.json();
  }

  useEffect(() => {
    const timerId = setTimeout(async () => {
      const selectedCategories = getSelectedProductsCategory();

      if (selectedCategories?.length === 0) {
        if (productsCopy.length > 0) {
          setProducts(productsCopy);
        }
      } else {
        const promises = selectedCategories.map((selCat) =>
          fetchProductsForThisCategory(selCat)
        );

        if (promises.length > 0) {
          const results = await Promise.all(promises);
          const combinedResults = results.flat(); // cleaner flattening
          setProducts(combinedResults);
        }
      }
    }, 500);

    return () => clearTimeout(timerId);
  }, [categories]);

  return (
    <div>
      <div className={styles.options_at_top}>
        <div className={styles.products_length}>
          {error ? (
            <h3>{error}</h3>
          ) : loading ? (
            "Loading"
          ) : products.length > 0 ? (
            `${products.length} ITEMS`
          ) : null}
        </div>

        <div className={styles.filter_toggle}>
          <Image
            src="/arrow_for_filter.svg"
            alt="arrow_left_for_filter"
            width={16}
            height={16}
            onClick={handleToggleSideFilters}
            style={{ cursor: "pointer" }}
          />
          <div className={styles.filter_toggle_text}>
            {toggleSideFilters ? hideFilterText : showFilterText}
          </div>
        </div>

        <div className={styles.dropdown_select}>
          <div className={styles.dropdown_text}>{dropDownText}</div>
          <Image
            src="/arrow-left.svg"
            alt="arrow_for_recommendations"
            width={16}
            height={16}
          />
        </div>
      </div>

      {toggleSideFilters && (
        <SideFilter
          categories={categories}
          setCategories={setCategories}
          toggleSideFilters={toggleSideFilters}
        />
      )}

      <Products
        toggleSideFilters={toggleSideFilters}
        products={products}
        categories={categories}
        loading={loading}
      />
    </div>
  );
}
