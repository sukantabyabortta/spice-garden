import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notfound-container">
      <div className="notfound-box">
        <h1 className="notfound-code">404</h1>
        <h2 className="notfound-title">Page Not Found</h2>
        <p className="notfound-text">
          Oops! The page you are looking for doesn’t exist or has been moved.
        </p>

        <Link to="/" className="notfound-btn">
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;