function Announcements({ anData }) {

  return (
    <div className="left-column">
      <section className="announcements-section">
        <div className="customPanel1">
          <div className="announcements-list">

            {anData.map((item, index) => (
              <div className="announcement-item" key={index}>
                <h3>{item.title}</h3>

                <div className="announcement-item-inner">
                  {item.content.map((text, i) => (
                    <p key={i}>{text}</p>
                  ))}
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
    </div>
  );
}

export default Announcements;
