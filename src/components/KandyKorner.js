import React from "react"
import "./KandyKorner.css"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
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
        <NavBar />
        <ApplicationViews />
    </>
)
