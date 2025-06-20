import styles from "../styles/SideFilter.module.css"
import Accrodion from "./Accordion"

export default function SideFilter({categories, setCategories, toggleSideFilters}) {


    return (
        <div 
        className={`${styles.container}`}
        
        >
                <Accrodion categories={categories} setCategories={setCategories}/>
    
        </div>
    )
}