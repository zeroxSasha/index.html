import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import '../styles/header.scss';
import { startEyesMovement } from '../scripts/eyesMovement.js';

const Header = ({ width }) => {
  const location = useLocation();
  const hamMenuRef = useRef(null);
  const headerRef = useRef(null);

  const menuPages = [
    (width < 768 ? { path: '/', label: 'Home' } : { path: '/projects', label: 'Projects' }),
    { path: '/experiences', label: 'Experiences' },
    (width < 768 ? { path: '/projects', label: 'Projects' } : { path: '/', label: 'Home' }),
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];
  
  useEffect(() => {
    startEyesMovement();
  }, []);
  
  useEffect(() => {
    if (width < 768) {
      const hamMenu = hamMenuRef.current;
      const offHeader = headerRef.current;

      const toggleMenu = () => {
        hamMenu.classList.toggle('active');
        offHeader.classList.toggle('active');
      };

      hamMenu.addEventListener('click', toggleMenu);

      return () => {
        hamMenu.removeEventListener('click', toggleMenu);
      };
    }
  }, [width]);

  return (
    <>
      <div ref={hamMenuRef} className='Header__ham-menu'>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <header ref={headerRef} className="Header">
        <nav className="Header__links">
          <ul>
            {menuPages.map(value => (
              <li key={value.path} className={`${location.pathname === value.path ? 'navigation-link-active' : ''} navigation-link`}>
                {value.path === '/' ?
                  <Link className="navigation-link__item" to={value.path}>
                    <svg height="80px" width="80px" version="1.1" id="penguin" viewBox="0 0 300 300" fill="#000000">
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <g id="XMLID_894_">
                          <path id="XMLID_895_" style={{ fill: '#3d3846' }} d="M266.568,163.431c-4.795-4.795-10.506-8.111-16.568-9.962V100 C250,44.771,205.229,0,150,0S50,44.771,50,100v53.469c-6.063,1.851-11.773,5.167-16.568,9.962 c-15.621,15.622-15.621,40.947,0,56.569L50,203.432V210c0,35.891,18.911,67.359,47.309,85H150h52.691 C231.089,277.359,250,245.891,250,210v-6.568L266.568,220C282.19,204.378,282.19,179.053,266.568,163.431z"></path>
                          <path id="XMLID_896_" style={{ fill: '#3d3836' }} d="M266.568,163.431c-4.795-4.795-10.506-8.111-16.568-9.962V100 C250,44.771,205.229,0,150,0c0,63,0,218,0,295h52.691C231.089,277.359,250,245.891,250,210v-6.568L266.568,220 C282.19,204.378,282.19,179.053,266.568,163.431z"></path>
                          <path id="XMLID_897_" style={{ fill: '#FFFFFF' }} d="M175,50c-9.796,0-18.648,4.029-25,10.515C143.647,54.029,134.796,50,125,50 c-19.33,0-35,15.67-35,35v165c0,16.356,6.553,31.177,17.167,42h85.666C203.447,281.177,210,266.356,210,250V85 C210,65.67,194.33,50,175,50z"></path>
                          <circle className='eye' id="XMLID_898_" style={{ fill: '#241f31' }} cx="120" cy="90" r="10"></circle>
                          <circle className='eye' id="XMLID_899_" style={{ fill: '#241f31', }} cx="180" cy="90" r="10"></circle>
                          <polygon id="XMLID_900_" style={{ fill: '#FF9811' }} points="150,110 120,130 150,160 180,130 "></polygon>
                          <polygon id="XMLID_901_" style={{ fill: '#FF5023' }} points="150,110 180,130 150,160 "></polygon>
                          <path id="XMLID_902_" style={{ fill: '#FF9811' }} d="M185,260c-15.064,0-28.178,8.331-35,20.634C143.178,268.331,130.064,260,115,260 c-22.091,0-40,17.909-40,40h75h75C225,277.909,207.092,260,185,260z"></path>
                          <path id="XMLID_903_" style={{ fill: '#FF5023' }} d="M150,280.634C156.822,268.331,169.936,260,185,260c22.092,0,40,17.909,40,40h-75 C150,300,150,291.667,150,280.634z"></path>
                        </g>
                      </g>
                    </svg>
                  </Link>
                  :
                  <Link className="navigation-link__item" to={value.path}>{value.label}</Link>
                }
                {location.pathname === value.path ? 
                  <div className='navigation-link__dot'></div>
                  :
                  <></>
                }
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header;
