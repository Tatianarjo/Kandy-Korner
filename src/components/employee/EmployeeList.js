import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employee.css"

export const EmployeeList = () => {

    const { employees, getEmployees } = useContext(EmployeeContext)

    useEffect(() => {
        console.log("EmployeeList: useEffect - getEmployees")
        getEmployees()
    }, [])

    return (
        <section className="employees">
            {
                employees.map(employee => {
                    return (
                        <div className="employee" id={`employee--${employee.id}`}>
                            <div className="employee__name">
                                Name: { employee.name }
                            </div>
                            <div className="employee__birthday">
                                Birthday: { employee.birthday}
                            </div>
                            <div className="employee__location">
                                Location: { employee.locationId }
                            </div>
                            <div className="employee__manager">
                                Manager: { employee.manager }
                            </div>
                            <div className="employee__fullTime">
                                Fulltime: { employee.fullTime }
                            </div>
                            <div className="employee_hourly">
                                Hourly: { employee.hourlyRate }
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}