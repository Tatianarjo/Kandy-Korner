import React from "react"
import { Route } from "react-router-dom"
import { CustomerList } from "./customer/CustomerList"
import { CustomerProvider } from "./customer/CustomerProvider"
import { EmployeeList } from "./employee/EmployeeList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { LocationList } from "./location/LocationList"
import { LocationProvider } from "./location/LocationProvider"
import { ProductList } from "./product/ProductList"
import { ProductProvider } from "./product/ProductProvider"
import { ProductTypeList } from "./productType/ProductTypeList"
import { ProductTypeProvider } from "./productType/ProductTypeProvider"

export const ApplicationViews = () => {
    return(
        <>

        <CustomerProvider> 
            <Route path="/customers">
                <CustomerList />
            </Route>
        </CustomerProvider>

        <EmployeeProvider>
            <Route path="/employees">
                <EmployeeList />
            </Route>
        </EmployeeProvider>

        <LocationProvider>
            <Route path="/locations">
                <LocationList />
            </Route>
        </LocationProvider>

        <ProductProvider>
            <Route path="/products">
                <ProductList />
            </Route>
        </ProductProvider>

        <ProductTypeProvider>
            <Route path="/productTypes">
                <ProductTypeList />
            </Route>
        </ProductTypeProvider>
        </>
    )
}