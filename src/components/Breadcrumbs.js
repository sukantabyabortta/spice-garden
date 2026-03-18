import { Link } from 'react-router-dom';

function Breadcrumbs({ items, show = true, className = "" }) {
  if (!show || !items || items.length === 0) return null;

  return (
    <div className={`breadcrumbs bgColor ${className}`}>
      <div className="container">
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.link ? (
                <Link to={item.link}>{item.label}</Link>
              ) : (
                item.label
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Breadcrumbs;