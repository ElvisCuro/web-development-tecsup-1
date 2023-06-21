import { useRef } from 'react';
import logoElliotGaramendi from '../assets/img/logo-elliot-garamendi.webp';

const Header = ({ routeLinks, socialNetworks }) => {

  const offCanvas = useRef();

  const openMenu = () => {
    offCanvas.current.classList.add('off-canvas--show');
  };

  const closeMenu = () => {
    offCanvas.current.classList.remove('off-canvas--show');
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="container flexbox flexbox--header">
          <a href="#hero">
            <img src={logoElliotGaramendi} alt="Logo de Elliot Garamendi" width={48} height={48} className="img img--logo" />
          </a>
          <div ref={offCanvas} className="off-canvas off-canvas--right off-canvas--mobile">
            <div className="off-canvas__child">
              <button
                className="off-canvas__close icon"
                onClick={closeMenu}
              >
                <i className="bi bi-x"></i>
              </button>
              <ul className="list flexbox flexbox--center flexbox--responsive h-100 gap-4xs">
                {routeLinks.map((element, index) => {
                  const { href, title, content } = element;
                  return (
                    <li key={index}>
                      <a href={href} title={title} className="link">{content}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <ul className="list d-flex a-items-center gap-4xs">
            {socialNetworks.map((element, index) => {
              const { href, title, content } = element;
              return (
                <li key={index}>
                  <a
                    href={href}
                    title={title}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link link--lg"
                    dangerouslySetInnerHTML={{ __html: content }}
                  />
                </li>
              );
            })}
            <button onClick={openMenu} className="icon md:d-none">
              <i className="bi bi-list"></i>
            </button>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;