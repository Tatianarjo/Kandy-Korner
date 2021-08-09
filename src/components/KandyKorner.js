import React from "react"
import "./KandyKorner.css"
import { ProductProvider } from "./product/ProductProvider"
import { ProductList } from "./product/ProductList"
import { LocationProvider } from "./location/LocationProvider"
import { LocationList } from "./location/LocationList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { EmployeeList } from "./employee/EmployeeList"
import { CustomerProvider } from "./customer/CustomerProvider"
import { CustomerList } from "./customer/CustomerList"
import { ProductTypeProvider } from "./productType/ProductTypeProvider"
import { ProductTypeList } from "./productType/ProductTypeList"




export const KandyKorner = () => (
    <>
    <h2>Kandy Korner</h2>

    <div>The Best Treats in the South!</div>

    <h2>Products</h2>
    <article className="products">
        <ProductProvider>
            <ProductList />
        </ProductProvider>
    </article>

    <h2>Locations</h2>
    <article className="locations">
        <LocationProvider>
            <LocationList />
        </LocationProvider>
    </article>

    <h2>Employees</h2>
    <article className="employees">
        <EmployeeProvider>
            <EmployeeList />
        </EmployeeProvider>
    </article>

    <h2>Customers</h2>
    <article className="customers">
        <CustomerProvider>
            <CustomerList />
        </CustomerProvider>
    </article>

    <h2>Product Types</h2>
    <article className="productTypes">
        <ProductTypeProvider>
            <ProductTypeList />
        </ProductTypeProvider>
    </article>
</>
)