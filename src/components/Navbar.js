import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const ListItemArray = [
  { id: 0, title: "Is Triangle", to: "/" },
  { id: 1, title: "Quiz", to: "/quiz" },
  { id: 2, title: "Hypotenuse", to: "/hypotenuse" },
  { id: 3, title: "Area", to: "/area" },
];

const ListItem = ({ title, to, active, setActive }) => {
  const activeList = to === active;
  const borderStyle = "2px solid #22d3ee";
  const clickHandler = () => setActive(to);

  return (
    <li
      style={{ borderBottom: activeList ? borderStyle : "none" }}
      onClick={clickHandler}
    >
      <Link className="link" to={to}>
        {title}
      </Link>
    </li>
  );
};

export default function Navbar() {
  const { pathname } = useLocation();
  const [active, setActive] = useState(pathname);

  return (
    <nav>
      <ul>
        {ListItemArray.map((item) => {
          const { id, title, to } = item;
          return (
            <ListItem
              key={id}
              title={title}
              to={to}
              active={active}
              setActive={setActive}
            />
          );
        })}
      </ul>
    </nav>
  );
}
