import React from "react";
import PropTypes from "prop-types";
import {graphql} from "gatsby";
import { Helmet } from 'react-helmet'; 
import Layout from "../components/Layout";
import Pricing from "../components/Pricing";
import Separator from "../components/Separator";

export const ProductPageTemplate = ({
  image,
  title,
  heading,
  description,
  code_pricing,
  main,
  conduite_pricing,
  pricing,
}) => (
  <div className="content">
    <div
      className="full-width-image-container margin-top-0"
      style={{
        backgroundImage: `url('/img/blog-index.svg')`,
        backgroundSize: `cover`,
      }}
    >
      <h1
        className="has-text-weight-bold is-size-1"
        style={{
          boxShadow: "0.5rem 0 0 #971515, -0.5rem 0 0 #971515",
          backgroundColor: "#971515",
          color: "white",
          padding: "1rem",
        }}
      >
        Formules
      </h1>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns is-centered my-4">
            <div className="column is-10">
              <h3 className="has-text-weight-semibold is-size-2">{heading}</h3>
              <p className="is-size-4">{description}</p>
              <div className="column is-12">
                <Separator />
                <h2 className="has-text-weight-semibold is-size-3 mt-0">
                  {code_pricing.heading}
                </h2>
                <p className="is-size-5">{code_pricing.description}</p>
                <Pricing key={code_pricing.index} data={code_pricing.plans} />
              </div>
            </div>
          </div>
          <div className="columns is-centered my-4">
            <div className="column is-10">
              <div className="column is-12">
                <Separator/>
                <h3 className="has-text-weight-semibold is-size-3">
                  {main.heading}
                </h3>
                <p className="is-size-5">{main.description}</p>
              </div>
              <div className="column is-12">
                <Pricing key={conduite_pricing.index} data={conduite_pricing.plans} />
              </div>
              <div className="columns is-centered">
                <Separator />
              </div>
              <h2 className="has-text-weight-semibold is-size-2 has-text-centered">
                {pricing.heading}
              </h2>

              <div className="columns is-centered my-4">
                <div className="column is-half">
                  <p className="is-size-4">{pricing.description}</p>
                  <p className="is-size-5">
                    Le parcours de formation proposé permettra de faire
                    progresser l’élève dans sa formation pour l’amener en
                    situation de réussite aux examens du permis de conduire. Au
                    travers de la signature du contrat, le candidat s’engage à
                    suivre ce parcours de formation :
                  </p>
                </div>
                <div className="column is-narrow">
                  <div>
                    <Pricing key={pricing.index} data={pricing.plans} />
                  </div>
                </div>
              </div>
              <div className="columns is-centered">
                <Separator />
              </div>
              <h2 className="has-text-centered is-size-2 has-text-weight-semibold">
                Les modalités de paiement
              </h2>
              <div className="columns is-centered">
                <div className="column has-text-centered">
                  <p className="heading is-size-5 has-text-weight-semibold">
                    Espèces
                  </p>
                  <p className="title">
                    <span className="icon has-text-info">
                      <i className="fas fa-money-bill-alt fa-2x"></i>
                    </span>
                  </p>
                  <p>
                    1/4 à l'inscription puis 3 fois sans frais dès le début de
                    la formation
                  </p>
                </div>
                <div className="column has-text-centered">
                  <p className="heading is-size-5 has-text-weight-semibold">
                    Chèques
                  </p>
                  <p className="title">
                    {" "}
                    <span className="icon has-text-info">
                      <i className="fas fa-money-check fa-2x"></i>
                    </span>
                  </p>
                  <p>3 ou 4 fois</p>
                </div>
              </div>
              <h2 className="has-text-centered is-size-2 has-text-weight-semibold my-6">
                L'AUTO ECOLE A SOUSCRIT A UNE GARANTIE FINANCIÈRE
              </h2>
              <p className="has-text-centered" style={{marginTop: "5rem"}}>
                <span className="icon has-text-info">
                  <i className="fas fa-hand-holding-usd fa-6x"></i>
                </span>
              </p>
              <p className="is-size-4 has-text-centered">
                L'auto-école à souscrit à cette garantie financière afin de la
                sécuriser la formation de ses candidats. En cas de défaillance
                financière de l'auto-école, le candidat peut se faire rembourser
                les prestations non consommées en s'adressant à notre assureur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

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
  pricing: PropTypes.shape({
    plans: PropTypes.array,
  }),
};

const ProductPage = ({data}) => {
  const {frontmatter} = data.markdownRemark;

  return (
    <Layout>
      <Helmet title={`${frontmatter.title} - Auto-école Sainte-Clotilde`} />
      <ProductPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        code_pricing={frontmatter.code_pricing}
        main={frontmatter.main}
        conduite_pricing={frontmatter.conduite_pricing}
        testimonials={frontmatter.testimonials}
        pricing={frontmatter.pricing}
      />
    </Layout>
  );
};

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default ProductPage;

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: {eq: $id}) {
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
`;
