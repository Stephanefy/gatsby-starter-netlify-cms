import React, {useState, useEffect} from 'react'
import { Link, StaticQuery } from 'gatsby'

const Navbar = () =>  {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     active: false,
  //     navBarActiveClass: '',
  //   }
  // }
  const [isActive, setIsActive] = useState(false);
  const [navBarActiveClass, setNavBarActiveClass] = useState("")

  const toggleHamburger = () => {
    // toggle the active boolean in the state
    // this.setState(
    //   {
    //     active: !this.state.active,
    //   },
    setIsActive(!isActive)
      // after state has been updated,
      // () => {
      //   // set the class in state for the navbar accordingly
      //   this.state.active
      //     ? this.setState({
      //         navBarActiveClass: 'is-active',
      //       })
      //     : this.setState({
      //         navBarActiveClass: '',
      //       })
      // }
    //)
    // () => {
    //   isActive ? setNavBarActiveClass("is-active") : setNavBarActiveClass("");
    // }
  }

  useEffect(() => {
    isActive ? setNavBarActiveClass("is-active") : setNavBarActiveClass("");   
  }, [isActive])


    return (
      <StaticQuery
        query={graphql`
          query NavbarQuery {
          imageSharp(id: {eq: "81d8313a-8a0d-5a10-b2b7-f39c1a3a8954"}) {
            fluid {
              base64
              tracedSVG
              aspectRatio
              srcWebp
              srcSetWebp
              originalName
              src
            }
          }
        }
       `
       }
       render={data => 
        <nav
        className="navbar is-fixed-top has-shadow"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={data.imageSharp.fluid.src} alt="logo Sainte-clotilde" />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => toggleHamburger()}
              onKeyDown={() => toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${navBarActiveClass}`}
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
        }
      />
    )
  }


export default Navbar
