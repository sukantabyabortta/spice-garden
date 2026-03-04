function Hero({ title, description, className = "" }) {
  return (
    <section className={`about-hero ${className}`}>
      <div className="container">
        <div className="about-hero-content">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;