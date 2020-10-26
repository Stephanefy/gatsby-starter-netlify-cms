import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'

export const ProductPageTemplate = ({
  image,
  title,
  heading,
  description,
  code_pricing,
  main,
  conduite_pricing,
  testimonials,
  fullImage,
  pricing,
}) => (
  <div className="content">
    <div
      className="full-width-image-container margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
      }}
    >
    
      <h2
        className="has-text-weight-bold is-size-1"
        style={{
          boxShadow: '0.5rem 0 0 #BD1A1A, -0.5rem 0 0 #BD1A1A',
          backgroundColor: '#BD1A1A',
          color: 'white',
          padding: '1rem',
        }}
      >
        {title}
      </h2>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <h3 className="has-text-weight-semibold is-size-2">{heading}</h3>
              <p className="is-size-4">{description}</p>
              <div className="column is-12">
              <h2 className="has-text-weight-semibold is-size-3">
                {code_pricing.heading}
              </h2>
              <p className="is-size-5">{code_pricing.description}</p>
              <Pricing data={code_pricing.plans} />
            </div>
            </div>
          </div>
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="columns mb-3">
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-3">
                    {main.heading}
                  </h3>
                  <p>{main.description}</p>
                </div>
                </div>
                <div className="column is-12">
              <Pricing data={conduite_pricing.plans} />
            </div>
              <Testimonials testimonials={testimonials} />
              <div
                className="full-width-image-container"
                style={{
                  backgroundImage: `url(${
                    fullImage.childImageSharp
                      ? fullImage.childImageSharp.fluid.src
                      : fullImage
                  })`,
                }}
              />
                <hr style={{ width: "30%", margin: '5em auto', border: '2px solid #BD1A1A'}}/>

                <h2 className="has-text-weight-semibold is-size-2 has-text-centered">
                    {pricing.heading}
                  </h2>
              
              
                <div className="columns">
                <div className="column is-half">
                <p className="is-size-5">{pricing.description}</p>
                <p className="is-size-6">Le parcours de formation proposé permettra de faire progresser l’élève dans sa formation pour l’amener en situation de réussite aux examens du permis de conduire.
Au travers de la signature du contrat, le candidat s’engage à suivre ce parcours de formation :</p>
                </div>
                <div className="column is-7">
                  <div>
                      <Pricing data={pricing.plans} />
                  </div>
                </div>
              </div>
              <hr style={{ width: "30%", margin: '5em auto', border: '2px solid #BD1A1A'}}/>

              <h2 className="has-text-centered is-size-2 has-text-weight-semibold">
                  Les modalités de paiement
              </h2>
              <div className="columns is-centered">
                  <div className="column has-text-centered">
                      <p className="heading is-size-5 has-text-weight-semibold">Espèces</p>
                      <p className="title">
                      <span className="icon has-text-info">
                    <i className="fas fa-money-bill-alt fa-2x"></i>
                      </span>
                      </p>
                      <p>
                      1/4 à l'inscription puis 3 fois sans frais dès le début de la formation
                      </p>
                      
                  </div>
                  <div className="column has-text-centered">
                      <p className="heading is-size-5 has-text-weight-semibold">Chèques</p>
                      <p className="title"> <span className="icon has-text-info">
                    <i className="fas fa-money-check fa-2x"></i>
                      </span>
                      </p>
                      <p>
                      3 ou 4 fois 
                      </p>
                  </div>
                  <div className="column has-text-centered">
                      <p className="heading is-size-5 has-text-weight-semibold">CPF</p>
                      <p className="title"> <span className="icon has-text-info">
                    <i className="fas fa-file-invoice-dollar fa-2x"></i>
                      </span></p>
                      <p>
                      Les candidats au permis B peuvent mobiliser les heures inscrites sur le compte personnel de formation (CPF) pour financer en totalité ou en partie les coûts liés au passage du Code ou aux leçons de conduite.
Cette mesure vise à faciliter l'accès à l'emploi aux jeunes et aux personnes en difficultés.

                      </p>
                </div>
                  </div>
                  <h2 className="has-text-centered is-size-2 has-text-weight-semibold my-6">
                  L'AUTO ECOLE A SOUSCRIT A UNE GARANTIE FINANCIÈRE
                  </h2>
                  <p className='has-text-centered' style={{marginTop:'5rem'}}><span className="icon has-text-info">
                  <i class="fas fa-hand-holding-usd fa-6x"></i>
                  </span></p>
                  <p className="is-size-4 has-text-centered">
              
                  L'auto-école à souscrit à cette garantie financière afin de la sécuriser la formation de ses candidats.
                  En cas de défaillance financière de l'auto-école, le candidat peut se faire rembourser les prestations non consommées en s'adressant à notre assureur.
                  </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

ProductPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  code_pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  conduite_pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
  testimonials: PropTypes.array,
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  pricing: PropTypes.shape({
    plans: PropTypes.array,
  }),
}

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ProductPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        code_pricing={frontmatter.code_pricing}
        main={frontmatter.main}
        conduite_pricing={frontmatter.conduite_pricing}
        testimonials={frontmatter.testimonials}
        fullImage={frontmatter.full_image}
        pricing={frontmatter.pricing}
      />
    </Layout>
  )
}

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ProductPage

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        description
        code_pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
        main {
          heading
          description
          image1 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 1075, quality: 72) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        conduite_pricing {
          plans {
            description
            items
            plan
            price
          }
        }
        testimonials {
          author
          quote
        }
        full_image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
      }
    }
  }
`
