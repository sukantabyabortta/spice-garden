import { Link } from "react-router-dom";
import navData from "./navigationData";

function Navigation() {
  return (
    <nav className="nav-bar">
      <div className="nav-container">
        <ul className="nav-menu">
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