import { useState } from "react";
import Image from "next/image";
import styles from "../styles/Accordion.module.css";
import {
  allText,
  unSelectAllText,
  categoryAccordionText
} from "../utils/constants";

export default function Accordion({ categories, setCategories, accordionText }) {
  const [toggleAccordion, setToggleAccordion] = useState(false);

  function handleAccordionToggle() {
    setToggleAccordion(prev => !prev);
  }

  function handleUnSelectAll() {
    const allUnselected = categories.map(cat => ({
      ...cat,
      checked: false,
    }));
    setCategories(allUnselected);
  }

  function handleSelectCheckbox(id) {
    const updatedCategories = categories.map(cat =>
      cat.id === id ? { ...cat, checked: !cat.checked } : cat
    );
    setCategories(updatedCategories);
  }

  return (
    <div className={styles.container}>
      <div className={styles.accordion_closed}>
        <div className={styles.accordion_category_container}>
          <div className={styles.accordion_category_text}>
            {accordionText}
          </div>
          <div
            className={styles.accordion_toggle_icon}
            onClick={handleAccordionToggle}
          >
            <Image
              src="/arrow-left.svg"
              alt="accordion_dropdown_button"
              width={16}
              height={16}
            />
          </div>
        </div>
        <div className={styles.all}>{allText}</div>
      </div>

      <div className={`${styles.accordion_opened} ${toggleAccordion ? styles.open : ""}`}>
        {categories && (
          <div className={styles.unselect_all} onClick={handleUnSelectAll}>
            {unSelectAllText}
          </div>
        )}

        {categories ? (
          <div className={styles.filter_options}>
            {categories.map((category, i) => (
              <div key={i} className={styles.filter_category}>
                <input
                  type="checkbox"
                  checked={category.checked}
                  onChange={() => handleSelectCheckbox(category.id)}
                />
                {category.name}
              </div>
            ))}
          </div>
        ) : (
          <h4>
            Current API supports only the `{categoryAccordionText}` filter
          </h4>
        )}
      </div>
    </div>
  );
}
