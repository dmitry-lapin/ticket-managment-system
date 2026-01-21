import { NavLink } from "react-router";
import type { NavigationItem } from "../../configuration/navigation.config";

type NavigationMapProps = {
    items: NavigationItem[];
}

export const NavigationMap: React.FC<NavigationMapProps> = ({ items }) => {
  return (
    <section className="space-y-3">
      {items.map(item => {
        const Icon = item.icon

        return (
          <NavLink key={item.path} to={item.path} className="nav-item flex flex-row space-x-2 items-center">
            <Icon size={26} strokeWidth={1.5}/>
            <span className="text-md">{item.title}</span>
          </NavLink>
        )
      })}
    </section>
  )
}