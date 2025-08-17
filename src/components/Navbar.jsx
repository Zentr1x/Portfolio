import { Link, useLocation } from "react-router-dom";

import "../css/Navbar.css";

function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const navItems = [
    { number: "01", label: "// home", path: "/" },
    { number: "02", label: "// game", path: "/game" },
    { number: "03", label: "// rock paper scissors", path: "/rps" },
    { number: "04", label: "// reflections", path: "/reflection-home" },
  ];

  return (
    <>
      <nav className={isHome ? "navbar home-navbar" : "navbar"}>
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <span className="nav-number">{item.number}</span>
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
