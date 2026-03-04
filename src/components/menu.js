import { useEffect, useState } from "react";

function Menu() {

  // 1️⃣ Set launch date & time
  const launchDate = new Date("2026-03-21T18:30:00").getTime();

  // 2️⃣ State to store remaining time
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    mins: "00",
    secs: "00",
  });

  // 3️⃣ useEffect runs after component loads
  useEffect(() => {
    const timer = setInterval(() => {

      const now = new Date().getTime();
      const difference = launchDate - now;

      // 4️⃣ If time is over
      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({
          days: "00",
          hours: "00",
          mins: "00",
          secs: "00",
        });
        return;
      }

      // 5️⃣ Time calculations
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const mins = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const secs = Math.floor((difference % (1000 * 60)) / 1000);

      // 6️⃣ Update state
      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        mins: String(mins).padStart(2, "0"),
        secs: String(secs).padStart(2, "0"),
      });

    }, 1000);

    // 7️⃣ Cleanup when component unmounts
    return () => clearInterval(timer);

  }, [launchDate]);

  // 8️⃣ UI (HTML)
  return (
    <section className="menuPage">
      <h1>Our Menu is Simmering</h1>
      <p>We are perfecting our authentic spice blends.</p>

      <div className="timer">
        <TimeBox value={timeLeft.days} label="Days" />
        <TimeBox value={timeLeft.hours} label="Hours" />
        <TimeBox value={timeLeft.mins} label="Mins" />
        <TimeBox value={timeLeft.secs} label="Secs" />
      </div>

      <button className="btn-notify">NOTIFY ME ON LAUNCH</button>
    </section>
  );
}

// 9️⃣ Reusable component
function TimeBox({ value, label }) {
  return (
    <div className="time-box">
      <span>{value}</span>
      <div className="label">{label}</div>
    </div>
  );
}

export default Menu;
