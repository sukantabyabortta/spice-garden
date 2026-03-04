
// Now let’s convert it to PROPS-based so you really understand how data flows in React.

function RightColumn({ title, items }) {
  return (
    <div className="right-column">
      <div className="announcements-section">
        <h2 className="section-title">
          <span className="section-icon">🍛</span> {title}
        </h2>

        <div className="whats_new_cont">
          <div className="ticker_inner vertical-marquee">

            {items.map((item, index) => (
              <div className="item" key={index}>
                <div className="news_box">
                  <small>{item.label}</small>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
}

export default RightColumn;
