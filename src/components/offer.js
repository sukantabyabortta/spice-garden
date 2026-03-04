
const offerData = {
  hTxt: "Special Offer",
  paragraphs: [
    "🍛 Festival Special: 25% OFF on all Thali combos this week! Experience authentic Indian flavors at unbeatable prices.",
    "🍛 Festival Special: 55% OFF on all Thali combos this week! Experience authentic Indian flavors at unbeatable prices.",
    "🍛 Festival Special: 35% OFF on all Thali combos this week! Experience authentic Indian flavors at unbeatable prices."
  ],
};

function Offer() {
  return (
    <>
    <div className="announcement-bar">
        <div className="announcement-content">
            <span className="announcement-icon">{offerData.hTxt}</span>
            <div className="announcement-text">
                <div className="marquee">
                  {offerData.paragraphs.slice(0).map((text, index) => (
                    <div className="marquee-item" key={index}>{text}</div>
                  ))}
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default Offer;