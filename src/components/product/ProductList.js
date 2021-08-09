import React, { useContext, useEffect } from "react"
import { ProductContext } from "./ProductProvider"
import "./Product.css"

export const ProductList = () => {
    
    const { products, getProducts } = useContext(ProductContext)

    useEffect(() => {
        console.log("ProductList: useEffect - getProducts")
        getProducts()
    }, [])

    return (
        <section className="products">
            {
                products.map(product => {
                    return (
                        <div className="product" id={`product--${product.id}`}>
                            <div className="product__name">
                                Name: { product.name }
                            </div>
                            <div className="product__price">
                                Price: { product.price }
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}