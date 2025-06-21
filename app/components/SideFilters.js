import styles from "../styles/SideFilter.module.css";
import Accrodion from "./Accordion";
import {
  categoryAccordionText,
  accordionDropDownText,
} from "../utils/constants";

export default function SideFilter({ categories, setCategories, toggleSideFilters }) {
  return (
    <div className={styles.container}>
      {accordionDropDownText.map((accordionText, i) => (
        <Accrodion
          key={i}
          categories={accordionText === categoryAccordionText ? categories : null}
          setCategories={accordionText === categoryAccordionText ? setCategories : null}
          accordionText={accordionText}
        />
      ))}
    </div>
  );
}
