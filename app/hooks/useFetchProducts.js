"use client"
import { useState, useEffect } from "react";
import {productsUrl} from "../utils/constants"
export default function useFetchProducts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");


   async function getProducts() {
    try {
        setLoading(true)
        const data = await fetch(productsUrl);
        const productsData = await data.json();
        setProducts(productsData)
        setLoading(false)
    }
    catch(error) {
        setError(error)
    }
  
   }

    useEffect(()=>{
        getProducts();
    },[])


   return [products,error,loading]
}