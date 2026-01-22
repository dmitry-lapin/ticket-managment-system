import React from "react";
import { upperNavigationItems, lowerNavigationItems } from "../configuration/navigation.config";
import { NavigationMap } from "./specs/navigationMap";

export const Navigation: React.FC = () => {
    const sections = [
    upperNavigationItems,
    lowerNavigationItems
    ]

    return (
    <nav className="navigation-bar">
        {sections.map((items, index) => (
        <NavigationMap key={index} items={items} />
        ))}
    </nav>
    )
}

export default Navigation;