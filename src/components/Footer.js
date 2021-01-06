import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import Img from "gatsby-image"
import facebook from '../img/social/facebook.svg'

const Footer = props => {
   return (
      <StaticQuery
       query= {graphql`
          query FooterQuery {
            file(relativePath: { eq: "logo-ae-sainteclotilde-letterOnly.png" }) {
             childImageSharp {
          fluid(maxWidth:500) {
           ...GatsbyImageSharpFluid
          }
        }
      }
        }
       `
       }
       render={data => <footer className="footer has-background-light">
        <div className="content has-text-centered block" data-sal='zoom-in' data-sal-duration='200ms'>
          <img
            src={require('../../static/img/logo-ae-sainte-clotilde.png')}
            alt="logo"
            style={{ width: '12em', height: '10em', marginBottom: '5px' }}
          />
          <div className="columns is-centered" >
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
                    {/* <li>
                      <Link className="navbar-item" to="/about">
                        l'Auto-école
                      </Link>
                    </li> */}
                    <li>
                      <Link className="navbar-item" to="/products">
                        Formules
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/mentions-legales/">
                        mentions légales
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
                      <li className="is-size-6">
                        mounichettymareannick.autoecoles@sfr.fr.
                      </li>
                    </ul>

                  </section>
                </div>
              <div className="column is-4 social">
                <a title="facebook" href="https://www.facebook.com/autoecolesainteclotilde/">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
       } />
    );
}

export default Footer



