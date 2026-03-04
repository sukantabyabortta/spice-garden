
function QuickLinks({ title, links }) {

  return (
    <>
      <div className="quick-links-section-outer">
      <section className="quick-links-section">
        <h2 className="section-title">{title}</h2>

        <div className="quick-links-grid">
          {links.map((item, index) => (
            <a href={item.link} className="quick-link-card" key={index}>
              <i className={`fas ${item.icon}`}></i>
              <span>{item.label}</span>
            </a>
          ))}
        </div>

      </section>
    </div>

    </>
  );
}





export default QuickLinks;
