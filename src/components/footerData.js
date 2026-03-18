import logo from "../footer-site-logo.png";

const footerData = {
  logo,
  description:
    "Serving traditional Indian cuisine with love and authenticity since 2026",

  contact: [
    { icon: "fas fa-phone", text: "+91 98765 43210" },
    { icon: "fas fa-envelope", text: "info@spicegarden.com" },
    { icon: "fas fa-map-marker-alt", text: "123 Spice Street, Mumbai" }
  ],

  menus: [
    {
      title: "Our Menu",
      links: [
        { label: "Starters & Snacks", href: "#appetizers" },
        { label: "Curries & Gravies", href: "#curries" },
        { label: "Biryani & Rice", href: "#biryani" },
        { label: "Indian Breads", href: "#breads" },
        { label: "Indian Sweets", href: "#desserts" }
      ]
    },
    {
      title: "Services",
      links: [
        { label: "Dine-In", href: "#dining" },
        { label: "Takeaway", href: "#takeaway" },
        { label: "Home Delivery", href: "#delivery" },
        { label: "Wedding Catering", href: "#catering" },
        { label: "Private Events", href: "#events" }
      ]
    }
  ],

  hours: [
    "Monday - Thursday: 11AM - 10PM",
    "Friday - Saturday: 11AM - 11PM",
    "Sunday: 11AM - 10PM",
    "Lunch Special: 12PM - 3PM"
  ],

  social: [
    { icon: "fab fa-facebook", href: "#" },
    { icon: "fab fa-instagram", href: "#" },
    { icon: "fab fa-twitter", href: "#" },
    { icon: "fab fa-linkedin", href: "https://www.linkedin.com/in/sukanta-byabortta/" },
    { icon: "fab fa-youtube", href: "#" }
  ],

  copyright:
    "© 2024 Spice Garden Indian Restaurant. All Rights Reserved.",
  credit: "Designed & Developed by SUKANTA"
};

export default footerData;
