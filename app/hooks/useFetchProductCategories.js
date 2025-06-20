import { useState, useEffect } from "react";
import {productsCategories} from "../utils/constants"

export default function useFetchProductCategories() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const checkbox = <input type="checkbox" />


       async function getProductCategories() {
        try {
            setLoading(true)
            const data = await fetch(productsCategories);
            const categories = await data.json();
                const categoriesWithCheckboxes = categories.map((cat,i) => ({
                     id: i, // or some meaningful ID
                    name: cat,
                    checked: false
                    }));

             setCategories(categoriesWithCheckboxes);
            setLoading(false)
        }
        catch(error) {
            setError(error)
        }
      
       }
    
        useEffect(()=>{
            getProductCategories();
        },[])
    
    
       return [categories, setCategories]
}