import React from "react";
import { NavLink } from "react-router";
import { upperNavigationItems, lowerNavigationItems } from "./configuration/navigation.config";

export const Navigation: React.FC = () => {


    return(
        <nav className="flex flex-col justify-between h-full">
            <section className="">
                {upperNavigationItems.map(item => {
                    const Icon = item.icon

                    return (
                        <NavLink key={item.path} to={item.path} className="nav-item">
                            <Icon size={18} />
                            <span>{item.title}</span>
                        </NavLink>
                    )
                })}
            </section>
            <section className="">
                {lowerNavigationItems.map(item => {
                    const Icon = item.icon

                    return (
                        <NavLink key={item.path} to={item.path} className="nav-item">
                            <Icon size={18} />
                            <span>{item.title}</span>
                        </NavLink>
                    )
                })}
            </section>
        </nav>
    );
}

export default Navigation;