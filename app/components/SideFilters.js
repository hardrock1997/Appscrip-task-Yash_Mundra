import styles from "../styles/SideFilter.module.css";
import Accordion from "./Accordion";
import {
  categoryAccordionText,
  accordionDropDownText,
} from "../utils/constants";

export default function SideFilter({ categories, setCategories, toggleSideFilters }) {
  return (
    <aside className={styles.container} aria-label="Filter options">
      {accordionDropDownText.map((accordionText, i) => (
        <Accordion
          key={i}
          categories={accordionText === categoryAccordionText ? categories : null}
          setCategories={accordionText === categoryAccordionText ? setCategories : null}
          accordionText={accordionText}
        />
      ))}
    </aside>
  );
}
