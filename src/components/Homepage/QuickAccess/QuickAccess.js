import { Link } from 'react-router-dom';

function QuickLinks({ title, links }) {

  return (
    <>
      <div className="quick-links-section-outer">
      <section className="quick-links-section">
        <h2 className="section-title">{title}</h2>

        <div className="quick-links-grid">
          {links.map((item, index) =>
            item.link.startsWith('#') ? (
              <a href={item.link} className="quick-link-card" key={index}>
                <i className={`fas ${item.icon}`}></i>
                <span>{item.label}</span>
              </a>
            ) : (
              <Link to={item.link} className="quick-link-card" key={index}>
                <i className={`fas ${item.icon}`}></i>
                <span>{item.label}</span>
              </Link>
            )
          )}
        </div>

      </section>
    </div>

    </>
  );
}





export default QuickLinks;
