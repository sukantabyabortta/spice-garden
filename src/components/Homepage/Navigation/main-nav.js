import { useState } from "react";
import { Link } from "react-router-dom";
import navData from "./navigationData";

function Navigation() {

  const [isOpen, setIsOpen] = useState(false);
  const showNav = () => {
        setIsOpen(true); // always add, never remove
  };
  const hidenav = () => {
        setIsOpen(false); // always add, never remove
  };

  return (
    <nav className="nav-bar">
      <div className="nav-container">
        <span className="mobileButton" onClick={showNav}><i className="fa fa-bars"></i></span>
        <ul className={`nav-menu ${isOpen ? "change" : ""}`}>
          <span className="closeButton" onClick={hidenav}></span>
          {navData.map((item, index) => (
            <li
              key={index}
              className={`nav-item ${item.dropdown ? "dropdown" : ""}`}
            >
              <Link to={item.path}>
                {item.icon && <i className={`fas ${item.icon}`}></i>}{" "}
                {item.label}
                {item.dropdown && <i className="fas fa-chevron-down"></i>}
              </Link>

              {item.dropdown && (
                <ul className="dropdown-menu">
                  {item.dropdown.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link to={subItem.path}>{subItem.label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <a href="#reservation" className="btn btn-primary">BOOK TABLE</a>
          <a href="#order" className="btn btn-outline">ORDER ONLINE</a>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
