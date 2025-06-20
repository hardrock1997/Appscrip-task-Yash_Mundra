"use client"
import styles from "../styles/Body.module.css"
import useFetchProducts from "../hooks/useFetchProducts"
import {hideFilterText, dropDownText} from "../utils/constants"
import Image from "next/image"

export default function Body() {
    const [products,error,loading]=useFetchProducts()
    return (
            <div className={styles.options_at_top}>
                <div className={styles.products_length}>
                    {
                        error ? <h3>{error}</h3>:
                        loading ? (
                            "Loading"
                        ) : (
                            products.length > 0 ? (
                              products.length
                            ) : null
                        )
                    }

                </div>

                <div className={styles.filter_toggle}>
                        <Image
                            src="/arrow_for_filter.svg"
                            alt="arrow_left_for_filter"
                            width={16}
                            height={16}
                        />
                    <div className={styles.filter_toggle_text}>
                        {hideFilterText}
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
    )
}