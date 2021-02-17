import React from 'react'

import "./header.css"
import Logo from "../img/vet-clinic-logo.svg"
import Light from "../img/light.svg"
import Dark from "../img/moon.svg"


function Header() {

  const [isDark, setIsDark] = React.useState(false)

  const bodyChangeColors = () => {
    setIsDark(!isDark)

    document.body.classList.toggle("dark")
  }

  return (
    <>
      <header className="site-header">
        <div className="site-header__top">
          <div className="container site-header__top-container">
            <address className="site-header__top-address">г. Мариуполь, проспект Победы, 48а</address>

            <ul className="site-header__top-phones">
              <li className="site-header__top-phone">
                <a className="site-header__top-link" href="tel:+0676347574">(067) 634 -75 - 74</a>
              </li>

              <li className="site-header__top-phone">
                <a className="site-header__top-link" href="tel:+0676347574">(067) 634 -75 - 74</a>
              </li>

              <li className="site-header__top-phone">
                <a className="site-header__top-link" href="tel:+0676347574">(067) 634 -75 - 74</a>
              </li>
            </ul>

            <ul className="site-header__top-work-hours">
              <li className="site-header__top-work-hour">
                <b>Пн - Пт</b>
                <time dateTime="08:00">8:00</time>-<time dateTime="18:00">18:00</time>
              </li>
              <li className="site-header__top-work-hour">
                <b>Пн - Пт</b>
                <time dateTime="08:00">8:00</time>-<time dateTime="18:00">18:00</time>
              </li>
            </ul>
          </div>
        </div>

        <div className="site-header__bottom">
          <div className="container site-header__bottom-container">
            <div className="logo">
              <a className="logo__link" href="index.html">
                <img className="logo__img" src={Logo} alt="Vet Clinic website logo" width="178" height="86" />
              </a>
            </div>

            <nav className="sitenav">
              <ul className="sitenav__list">
                <li className="sitenav__item sitenav__item--active">
                  <a className="sitenav__link" href="index.html">Главная</a>
                </li>
                <li className="sitenav__item">
                  <a className="sitenav__link" href="about.html">О Клинике</a>
                </li>
                <li className="sitenav__item">
                  <a className="sitenav__link" href="services.html">Наши Услуги</a>
                </li>
                <li className="sitenav__item">
                  <a className="sitenav__link" href="articles.html">Полезные Статьи</a>
                </li>
                <li className="sitenav__item">
                  <a className="sitenav__link" href="faq.html">FAQ</a>
                </li>
                <li className="sitenav__item">
                  <a className="sitenav__link" href="contacts.html">Контакты</a>
                </li>
              </ul>
            </nav>

            <div className="dark-light-wrapper">
              <img className="mr-3" src={Light} alt="light" width="20" height="18" />

              <button className="dark-light-button" type="button" onClick={bodyChangeColors}>
                <span className={isDark ? "dark-light-button__span" : "dark-light-button__span"}></span>
              </button>

              <img className="ml-3" src={Dark} alt="morn" width="12" height="12" />
            </div>

            <a className="ask-question" href="#" target="_blank">Задать вопрос</a>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header