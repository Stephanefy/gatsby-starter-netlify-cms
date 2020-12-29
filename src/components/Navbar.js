import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/ae-stclotilde-fontonly.svg';

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-fixed-top has-shadow"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="logo" style={{ width: '600px', maxHeight:'2.7rem' }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-end">
              <Link className="navbar-item" to="/">
                Accueil
              </Link>
              <Link className="navbar-item" to="/horaires">
                Horaires
              </Link>
              <Link className="navbar-item" to="/products">
                Formules
              </Link>
              <div className="navbar-item has-dropdown is-hoverable">
                <Link className="navbar-link" to="/formations">
                  Formations
                </Link>         
                <div className="navbar-dropdown">
                    <Link className="navbar-item" to="/formation-b">
                      Formation B
                    </Link>
                    <Link className="navbar-item" to="/formation-b78">
                      Formation Boite auto
                    </Link>
                    <Link className="navbar-item" to="/formation-aac">
                      Conduite accompagnée
                    </Link>
                    <Link className="navbar-item" to="/formation-supervisee">
                      Conduite supervisée
                    </Link>
                    <Link className="navbar-item" to="/cours-de-perfectionnement">
                      Cours de perfectionnement
                    </Link>
                    <Link className="navbar-item" to="/examen-theorique">
                      Examen théorique
                    </Link>
                </div>
              </div>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
            </div> 
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
