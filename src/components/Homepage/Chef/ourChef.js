import chefData from "./OurChefDate";

function OurChefs({ show = true }) {
  if (!show) return null;

  return (
    <>
      <section className="officers-section">
        <div className="container">
            <h2>{chefData.hTxt}</h2>
            <p>{chefData.para}</p>
            <div className="officers-grid">
                  {chefData.content.map((item, index) => (
                    <div className="officer-card" key={index}>
                        <figure className="officer-photo">
                            <img src={item.img} alt={item.name} />
                        </figure>
                        <h3>{item.name}</h3>
                        <p>{item.specialist}</p>
                        <span>{item.experience}</span>
                    </div>
                ))}
            </div>
        </div>
    </section>
    </>
  );
}

export default OurChefs;