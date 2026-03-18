import { Link } from 'react-router-dom';

function ComingSoon() {
  return (
    <>
      <div className="banner">
        <h1>Coming Soon</h1>
        <p>We are currently cooking up something delicious for this page!</p>
    </div>

    <div className="content-placeholder">
        <h2>Stay Tuned!</h2>
        <p>Our team is working hard to bring you new features and updates. In the meantime, feel free to explore our menu or book a table.</p>
        <Link to="/" className="back-btn">Back to Home</Link>
    </div>
    </>
  );
}

export default ComingSoon;