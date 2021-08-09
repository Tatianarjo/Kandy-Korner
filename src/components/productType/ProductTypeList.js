import React, { useContext, useEffect } from "react"
import { ProductTypeContext } from "./ProductTypeProvider"
import "./ProductType.css"

export const ProductTypeList = () => {

    const { productTypes, getProductTypes } = useContext(ProductTypeContext)

    useEffect(() => {
        console.log("ProductTypeList: useEffect - getProductTypes")
        getProductTypes()
    }, [])

    return (
        <section className="productTypes">
            {
                productTypes.map(productType => {
                    return (
                        <div className="productType" id={`productType--${productType.id}`}>
                            <div className="productType__name">
                                Name: { productType.name }
                            </div>
                            <div className="productType__type">
                                Birthday: { productType.type}
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}