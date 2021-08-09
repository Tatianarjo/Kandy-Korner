import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"

export const LocationList = () => {

    const { locations, getLocations } = useContext(LocationContext)

    useEffect(() => {
        console.log("LocationList: useEffect - getLocations")
        getLocations()
    }, [])

    return (
        <section className="locations">
            {
                locations.map(location => {
                    return (
                        <div className="location" id={`location--${location.id}`}>
                            <div className="location__address">
                                Address: { location.address }
                            </div>
                            <div className="location__square">
                                Square Footage: { location.locationsquare }
                            </div>
                            <div className="location__handicap">
                                Handicap Accessible: { location.handicapAccessible }
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}