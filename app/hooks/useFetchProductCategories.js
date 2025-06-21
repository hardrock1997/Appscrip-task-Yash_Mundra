import { useState, useEffect } from "react";
import { productsCategories } from "../utils/constants";

export default function useFetchProductCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function getProductCategories() {
    try {
      setLoading(true);
      const response = await fetch(productsCategories);
      const data = await response.json();

      const categoriesWithCheckboxes = data.map((cat, i) => ({
        id: i,
        name: cat,
        checked: false,
      }));

      setCategories(categoriesWithCheckboxes);
      setLoading(false);
    } catch (error) {
      setError(error.message || "Something went wrong");
      setLoading(false);
    }
  }

  useEffect(() => {
    getProductCategories();
  }, []);

  return [categories, setCategories, loading, error];
}
