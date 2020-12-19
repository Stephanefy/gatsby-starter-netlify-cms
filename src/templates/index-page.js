import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import LeafletMap from '../components/Map';
import illuChoice from '../../static/img/undraw_select_option_y75i.svg'
import illuCar from '../../static/img/car-illustration.svg';


export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  logocpf,
  intro,
}) => (
  <div>
    <div
      className="full-width-image"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `center center`,
        backgroundAttachment: `fixed`,
        marginTop: '60px',
        zIndex:0,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '300px',
          lineHeight: '1',
          justifyContent: 'center',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
      <h1
        className="has-text-weight-bold is-size-1 has-text-centered"
        style={{
          backgroundColor: '#971515',
          boxShadow: '0.5rem 0 0 #971515, -0.5rem 0 0 #971515',
          color: 'white',
          padding: '1rem',
        }}
      >
        {title}
      </h1>
  
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile" data-sal="fade">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <p className="is-size-5">{mainpitch.description}</p>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12 ">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                </div>   
                </div> 
                    <div className="columns block">
                      <div className="column is-12" style={{ display: "flex", justifyContent:"center"}} data-sal="slide-left"  data-sal-easing="ease-out-back">
                              <img src={!!logocpf.childImageSharp ? logocpf.childImageSharp.fluid.src : logocpf} />
                      </div>
                      </div>
                      <div className="columns is-centered">
                      <div className="column is-half">
                          <p className="has-text-centered is-size-5">{description}</p>
                      </div>
                    </div>  
                    <hr style={{ width: "30%", margin: '5em auto', border: '2px solid #BD1A1A'}}/>
                <div className="columns block" data-sal='slide-right' data-sal-easing="ease-out-back">
                  <div className="column" className='is-size-6'>
                          <h3>Formules adaptées</h3>
                          <p>
                            Chaque formule que nous proposons a été pensée pour que l'élève soit préparé et organisé pour l'examen du permis B dans les meilleures conditions et les meilleurs délais.
                          </p>
                          <ul style={{ listStyleType: "none"}}>
                            <li>Formules code</li>
                            <li>Formule code et conduite(30h)</li>
                            <li>Formule conduite supervisée</li>
                            <li>Formule étudiante</li>
                            <li>Formule AAC</li>
                          </ul>
                  </div>
                  <div className="column is-half">
                      <img src={illuChoice} alt="divers formules" width="400"/>
                  </div>
                </div>
                <hr style={{ width: "30%", margin: '5em auto', border: '2px solid #BD1A1A'}}/>

                <div className="columns" data-sal='slide-left'  data-sal-easing="ease-out-back" data-sal-duration="500ms">
                  <div className="column">
                  <img src={illuCar} alt="divers formules" width="400"/>
                  </div>
                  <div className="column is-half is-size-6" >
                  <h3>Apprendre à conduire au meilleur prix près de Saint-Denis</h3>
                          <p>
                          Code de la route, permis B ou encore conduite accompagnée... Passez votre permis de conduire dans des conditions optimales près de votre domicile à Sainte-Clotilde et dans ses environs. Faites confiance à nos moniteurs sérieux, diplômés, disponibles et à l'écoute. Pour connaître toutes les modalités d'inscription, n'hésitez pas à venir nous rencontrer à l'auto-école ou à nous contacter par e-mail ou par téléphone.
                  </p>
                  </div>
                </div>      
                <div className="columns block">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      En savoir plus
                    </Link>
                  </div>
                </div>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2 has-text-centered">
                    Nous vous garantissons :
                  </h3>
                  </div>
                  <div className="columns is-centered">
                    <div className="column has-text-centered">
                      <p className="heading is-size-5">Inscriptions faciles</p>
                      <p className="title">
                   <span className="icon has-text-info">
                    <i className="fas fa-mouse"></i>
                  </span></p>
                  </div>
                  <div className="column has-text-centered">
                      <p className="heading is-size-5">Disponibilité</p>
                      <p className="title">
                      <span className="icon has-text-info">
                    <i className="fas fa-calendar-check"></i>
                      </span>
                      </p>
                      
                  </div>
                  <div className="column has-text-centered">
                      <p className="heading is-size-5">Écoute</p>
                      <p className="title"> <span className="icon has-text-info">
                    <i className="fas fa-grin"></i>
                      </span></p>
                  </div>
                  <div className="column has-text-centered">
                      <p className="heading is-size-5">Résultats</p>
                      <p className="title"> <span className="icon has-text-info">
                    <i className="fas fa-thumbs-up"></i>
                      </span></p>
                </div>
                  </div>
          
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/contact">
                      Contactez-nous
                    </Link>
                  </div>
                  
                
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
        <LeafletMap />                    
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  logocpf: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        logocpf={frontmatter.logocpf}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        logocpf {
          childImageSharp{
            fluid(maxWidth: 400, quality: 100){
              ...GatsbyImageSharpFluid
            }
          }
        }
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
