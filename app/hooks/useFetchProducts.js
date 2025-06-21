"use client";

import { useState, useEffect } from "react";
import { productsUrl } from "../utils/constants";

export default function useFetchProducts() {
  const [products, setProducts] = useState([]);
  const [productsCopy, setProductsCopy] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function getProducts() {
    try {
      setLoading(true);
      const response = await fetch(productsUrl);
      const productsData = await response.json();

      setProducts(productsData);
      setProductsCopy(productsData);
      setLoading(false);
    } catch (err) {
      setError(err.message || "Failed to fetch products");
      setLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return [products, error, loading, setProducts, productsCopy, setLoading, setError];
}
