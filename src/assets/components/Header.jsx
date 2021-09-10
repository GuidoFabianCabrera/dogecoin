import React from 'react';

import '../styles/components/Header.scss';

import doge from '../static/doge.png';
import { ImGithub } from 'react-icons/im';

function Header() {
  return (
    <div className="Header">
      <div className="Header__background"></div>
      <div className="Header__container pt-4 pb-5 text-center">
        <div className="row justify-content-center mx-auto">
          <h1 className="Header__title col-12 font-weight-bold">
            1 Dogecoin = 1 Dogecoin
          </h1>
          <div className="col-12">
            <img className="Header__image" src={doge} alt="doge" />
          </div>
          <div className="col-12 col-md-9 mt-2">
            <p className="description">
              Dogecoin es una moneda digital peer-to-peer y de código abierto,
              favorita de Shiba Inus en todo el mundo.
            </p>
          </div>
          <div className="col-12 mt-3">
            <a className="btn btn-secondary btn-lg mx-1" href="/" role="button">
              Comienza ahora
            </a>
            <a
              className="btn btn-outline-secondary btn-lg mx-1 "
              href="/"
              role="button">
              <ImGithub className="mb-1" /> Código fuente
            </a>
          </div>
        </div>
        {/* --------------------------------------- */}
        {/* <div id="particles-js"></div>

        {window.particlesJS.load('particles-js', './particles.json', null)} */}

        {/* --------------------------------------- */}
      </div>
    </div>
  );
}

export default Header;
