import { useState, useEffect } from "react";

// images
import slide1 from "../assets/images/banner.png";
import slide2 from "../assets/images/biryani.jpg";
import slide3 from "../assets/images/thali.jpg";
import slide4 from "../assets/images/tandoor-kitchen.jpg";

// all slide data in one place
const slides = [
  {
    title: "Authentic Indian Flavors",
    text: "Experience the rich heritage of Indian cuisine with our traditional recipes and aromatic spices",
    btn: "Reserve Your Table",
    link: "#reservation",
    image: slide1,
  },
  {
    title: "From North to South India",
    text: "Savor diverse regional cuisines from Punjab to Kerala, all under one roof",
    btn: "Explore Menu",
    link: "#menu",
    image: slide2,
  },
  {
    title: "Perfect for Every Celebration",
    text: "We make every occasion special with authentic Indian hospitality",
    btn: "Plan Your Event",
    link: "#events",
    image: slide3,
  },
  {
    title: "Live Tandoor Kitchen",
    text: "Watch your food being cooked fresh by expert chefs",
    btn: "View Gallery",
    link: "#gallery",
    image: slide4,
  },
];

function HeroSlider() {
  // which slide is showing
  const [current, setCurrent] = useState(0);

  // auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // next slide
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  // previous slide
  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <div className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="slide-content">
            <h1>{slide.title}</h1>
            <p>{slide.text}</p>
            <a href={slide.link} className="btn btn-primary">
              {slide.btn}
            </a>
          </div>
        </div>
      ))}

      <button className="nav prev" onClick={prevSlide}>‹</button>
      <button className="nav next" onClick={nextSlide}>›</button>
    </div>
  );
}

export default HeroSlider;
