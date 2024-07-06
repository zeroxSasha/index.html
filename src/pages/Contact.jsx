import { useState } from "react";

import "../styles/contact.scss";
import GitHub from "../assets/svg/GitHub";
import Twitter from "../assets/svg/Twitter";
import LinkedIn from "../assets/svg/LinkedIn";
import MailTo from "../assets/svg/MailTo";

const Contact = () => {
  const [hover, setHover] = useState(null);

  const socials = [
    {image: GitHub, name: "GitHub", borderColor: "7px solid #42a2fd", onHover: "#908caa", linkto: "https://github.com/0xSashaa"},
    {image: Twitter, name: "Twitter", borderColor: "7px solid #38e54d", onHover: "#1DA1F2", linkto: "https://twitter.com/0xSashaa"},
    {image: LinkedIn, name: "LinkedIn", borderColor: "7px solid #fdff00", onHover: "#0077b5", linkto: "https://www.linkedin.com/in/0xsasha/"},
    {image: MailTo, name: "MailTo", borderColor: "7px solid #b00020", onHover: "#eb6f92", linkto: "mailto:lxudrr@gmail.com"}
  ]

  return (
    <section className="Contact">
      <div className="Contact__text">
        <h2 className='Contact__title'>CONTACT</h2>
      </div>
      <div className="Contact__links">
        <ul className="Contact__list">
          {socials.map((item, index) => (
            <li key={index} className="Contact__item">
              <a href={item.linkto} target="_blank">
                <button className="Contact__button"
                  onMouseEnter={() => setHover(index)}
                  onMouseLeave={() => setHover(null)}
                  style={{ border: item.borderColor }}
                >
                  <item.image color={ hover === index ? item.onHover : "#ffffff" } />
                  <p style={{ color: hover === index ? item.onHover : "#ffffff" }}>{ item.name }</p>
                </button>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Contact;
