import React from "react";
import "./sidebar.css";
import logo from "../assets/icons/logo-spotify.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faPlus,
  faGlobe,
  faHome,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div class="sidebar">
      <nav class="sidebar__navigation">
        <div class="logo">
          <a href="">
            <img src={logo} alt="logo do Spotify"></img>
          </a>
        </div>
        <ul>
          <li>
            <a href="">
              <span class="fa">
                <FontAwesomeIcon icon={faHome} />
              </span>
              <span>Início</span>
            </a>
          </li>
          <li>
            <a href="">
              <span class="fa">
                <FontAwesomeIcon icon={faSearch} />
              </span>
              <span>Buscar</span>
            </a>
          </li>
        </ul>
      </nav>

      <div class="library">
        <div class="library__content">
          <button class="library__button">
            <span class="fa fas">
              <FontAwesomeIcon icon={faBook} />
            </span>
            <span>Sua biblioteca</span>
          </button>
          <span class="fa">
            <FontAwesomeIcon icon={faPlus} />
          </span>
        </div>

        <section class="section-playlist__podcast">
          <div class="section__content">
            <span class="text title">Crie sua primeira playlist</span>
            <span class="text subtitle">É fácil, vamos te ajudar.</span>
            <button class="section__button">
              <span>Criar playlist</span>
            </button>
          </div>
        </section>
        <section class="section-playlist__podcast">
          <div class="section__content">
            <span class="text title">Que tal seguir um podcast novo?</span>
            <span class="text subtitle">
              Avisaremos você sobre novos episódios.
            </span>
            <button class="section__button">
              <span class="podcast-button">Explore podcasts</span>
            </button>
          </div>
        </section>

        <div class="cookies">
          <a href="">Legal</a>
          <a href="">Centro de Privacidade</a>
          <a href="">Política de privacidade</a>
          <a href="">Cookies</a>
          <a href="">Sobre anúncios</a>
          <a href="">Acessibilidade</a>
          <a href="">Notice at Collection</a>
          <a href="">Your Privacy Choices</a>
        </div>
        <div class="languages">
          <button class="languages__button">
            <span class="fa">
              <FontAwesomeIcon icon={faGlobe} />
            </span>
            <span>Português do Brasil</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
