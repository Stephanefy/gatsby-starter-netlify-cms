import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-light">
        <div className="content has-text-centered block">
          <img
            src={logo}
            alt="logo"
            style={{ width: '16em', height: '10em', marginBottom: '-20px' }}
          />
          <div className="columns is-centered ">
            <div className="column is-half">
              <p className=" has-text-centered has-text-dark is-size-4">
              Depuis sa création en 1976 l'auto école Sainte Clotilde assure une formation de qualité. Une équipe dynamique, compétente et sérieuse vous accompagne et se tient à votre disposition grâce à son expérience depuis plus de 25 ans.
              </p>
            </div>
          </div>
        </div>

        <div className="content has-text-centered has-background-info has-text-white-ter">
          <div className="container has-background-info has-text-white-ter">
            <div style={{ maxWidth: '100vw' }} className="columns is-centered">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Accueil
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        l'Auto-école
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/products">
                        Formules
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact/examples">
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact/examples">
                        Réglement intérieur
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                  <section className='menu'>
                    <ul className="has-text-centered is-size-5" style={{listStyleType:"none", marginLeft:'0'}}>
                      <li>
                      18 RUE LORY LES HAUTS, 97490 STE CLOTILDE
                      </li>
                      <li>
                          02 62 28 46 25
                      </li>
                      <li>
                          adresse e-mail
                      </li>
                    </ul>

                  </section>
                </div>
              <div className="column is-4 social">
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="vimeo" href="https://vimeo.com">
                  <img
                    src={vimeo}
                    alt="Vimeo"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
