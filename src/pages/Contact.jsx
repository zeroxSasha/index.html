import { useState } from "react";

import "../styles/contact.scss";
import GitHub from "../assets/svg/GitHub";
import Twitter from "../assets/svg/Twitter";
import LinkedIn from "../assets/svg/LinkedIn";
import MailTo from "../assets/svg/MailTo";

const Contact = () => {
  const [hover, setHover] = useState(null);

  const socials = [
    {name: GitHub, onHover: "#908caa", linkto: "https://github.com/0xSashaa"},
    {name: Twitter, onHover: "#1DA1F2", linkto: "https://twitter.com/0xSashaa"},
    {name: LinkedIn, onHover: "#0077b5", linkto: "https://www.linkedin.com/in/0xsasha/"},
    {name: MailTo, onHover: "#eb6f92", linkto: "mailto:lxudrr@gmail.com"}
  ]

  return (
    <section className="Contact">
      <ul className="Contact__list">
        {socials.map((item, index) => (
          <li key={index} className="Contact__item">
            <a href={item.linkto} target="_blank">
              <button className="Contact__button"
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(null)}
              >
                <item.name color={ hover === index ? item.onHover : "#ffffff" } />
                <p style={{ color: hover === index ? item.onHover : "#ffffff" }}>{ item.name.name.toLowerCase() }</p>
              </button>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Contact;
