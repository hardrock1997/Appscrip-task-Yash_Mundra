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
  headerDropDownText,
} from "../utils/constants";

import SideFilter from "./SideFilters";
import Products from "./Products";

export default function Body() {
  const [
    products,
    error,
    loading,
    setProducts,
    productsCopy,
    setLoading,
    setError,
  ] = useFetchProducts();

  const [categories, setCategories] = useFetchProductCategories();
  const [toggleSideFilters, setToggleSideFilters] = useState(true);
  const [toggleHeaderDropDown, setToggleHeaderDropDown] = useState(false);
  const [selectedDropDownOption, setSelectedDropDownOption] =
    useState(dropDownText);

  const handleToggleSideFilters = () => {
    setToggleSideFilters((prev) => !prev);
  };

  const getSelectedProductsCategory = () => {
    return categories.filter((cat) => cat.checked === true);
  };

  async function fetchProductsForThisCategory(category) {
    try {
      setLoading(true);
      const res = await fetch(`${categoryWiseProductsUrl}${category.name}`);
      return res.json();
    } catch (error) {
      setLoading(false);
      setError(error) || "Could not get the Products";
    }
  }

  const handleToggleHeaderDropDown = () => {
    setToggleHeaderDropDown(!toggleHeaderDropDown);
  };

  const handleSelectDropDownOption = (selectedId) => {
    headerDropDownText.forEach((dropDownOption) => {
      if (dropDownOption.id === selectedId) {
        dropDownOption.selected = true;
        setSelectedDropDownOption(dropDownOption.text);
      } else {
        dropDownOption.selected = false;
      }
    });
  };

  useEffect(() => {
    const timerId = setTimeout(async () => {
      const selectedCategories = getSelectedProductsCategory();
      const selectedOption = headerDropDownText.find(
        (option) => option.text === selectedDropDownOption
      );
      const id = selectedOption?.id || 0;

      const hasCategories = selectedCategories.length > 0;
      const isDefaultDropdown = selectedDropDownOption === dropDownText;

      let combinedResults = [];

      if (hasCategories) {
        const promises = selectedCategories.map(fetchProductsForThisCategory);
        const results = await Promise.all(promises);
        combinedResults = results.flat();
      }

      const applyDropdownLogic = (data) => {
        if (!data || data.length === 0) return;

        switch (id) {
          case 0:
            setProducts(data);
            break;
          case 1:
            setProducts([...data].sort((a, b) => b.id - a.id));
            break;
          case 2:
            setProducts([...data].filter((prod) => prod.rating.rate > 3.5));
            break;
          case 3:
            setProducts([...data].sort((a, b) => a.price - b.price));
            break;
          case 4:
            setProducts([...data].sort((a, b) => b.price - a.price));
            break;
          default:
            setProducts(data);
        }
      };

      if (isDefaultDropdown) {
        if (hasCategories) {
          applyDropdownLogic(combinedResults);
        } else {
          applyDropdownLogic(productsCopy);
        }
      } else {
        if (hasCategories) {
          applyDropdownLogic(combinedResults);
        } else {
          applyDropdownLogic(productsCopy);
        }
      }

      setLoading(false);
    }, 500);

    return () => clearTimeout(timerId);
  }, [categories, selectedDropDownOption]);

  return (
    <main>
      <h1 className={styles.visually_hidden}>
        Buy the Best Products Online - My Store
      </h1>

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

        <div
          className={styles.filter_toggle}
          role="button"
          tabIndex={0}
          onClick={handleToggleSideFilters}
          onKeyDown={(e) => e.key === "Enter" && handleToggleSideFilters()}
        >
          <Image
            src="/arrow_for_filter.svg"
            alt="Toggle filter sidebar"
            width={16}
            height={16}
            style={{ cursor: "pointer" }}
          />
          <div className={styles.filter_toggle_text}>
            {toggleSideFilters ? hideFilterText : showFilterText}
          </div>
        </div>

        <div
          className={styles.dropdown_select}
          role="button"
          tabIndex={0}
          onClick={handleToggleHeaderDropDown}
          onKeyDown={(e) => e.key === "Enter" && handleToggleHeaderDropDown()}
        >
          <div className={styles.dropdown_text}>{selectedDropDownOption}</div>
          <Image
            src="/arrow-left.svg"
            alt="Dropdown options for sorting"
            width={16}
            height={16}
            style={{ cursor: "pointer" }}
          />
          {toggleHeaderDropDown && (
            <div className={styles.dropdown}>
              {headerDropDownText.map((dropDownText, i) => (
                <div
                  key={i}
                  className={`${styles.dropdown_option} ${styles.dropdown_options_not_selected}`}
                  onClick={() => handleSelectDropDownOption(i)}
                >
                  {dropDownText.text === selectedDropDownOption && (
                    <Image
                      alt="Selected"
                      width={16}
                      height={12.3}
                      src="/dropdown_select.svg"
                    />
                  )}
                  <span>{dropDownText.text}</span>
                </div>
              ))}
            </div>
          )}
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
    </main>
  );
}

