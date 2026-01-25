import { NavLink } from "react-router";
import type { NavigationItem } from "../../configuration/navigation.config";

type NavigationMapProps = {
    items: NavigationItem[];
}

export const NavigationMap: React.FC<NavigationMapProps> = ({ items }) => {
  return (
    <section id="mapper">
      {items.map(item => {
        const Icon = item.icon

        return (
          <NavLink key={item.path} to={item.path} className="nav-item">
            <Icon/>
            <span>{item.title}</span>
          </NavLink>
        )
      })}
    </section>
  )
}