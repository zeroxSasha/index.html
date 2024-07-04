import '../styles/projects.scss';
import cryptobot from  '../assets/img/cryptobot.jpg';
import xSasha from  '../assets/img/0xSasha.jpg';
import memonad from  '../assets/img/memonad.jpg';

const Projects = () => {
  const items = [
    {name: '0xSasha', description: 'Built using ReactJS, ThreeJS, HTML, CSS', link: 'https://github.com/0xSashaa/0xSasha', backImage: xSasha},
    {name: 'cryptobot', description: ' Telegram Bot. Follow trends and get the best user experience in crypto with highly customizable functionality ', link: 'https://github.com/0xSashaa/cryptobot', backImage: cryptobot},
    {name: 'memonad', description: 'Just a meme website for a crypto project', link: 'https://github.com/0xSashaa/memnad', backImage: memonad}
  ];

  return (
    <section className="Projects">
      <div className="Projects__text">
        <h2 className="Projects__title">
          PROJECTS
        </h2>
      </div>
      <div className="Projects__items">
        <ul className="Projects__list">
          {items.map((item, index) => (
            <li key={index} className="Projects__item">
              <div style={{backgroundImage: `url(${item.backImage})`}} className="Projects__item__img"></div>
              <div className="Projects__item__text">
                <h3 className="Projects__item__text__title">{item.name}</h3>
                <p className="Projects__item__text__paragraph">{item.description}</p>
                <a href={item.link} target="_blank" className="Projects__item__text__link">
                  Source
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Projects;
