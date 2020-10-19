import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: '0.5rem 0 0 #971515, -0.5rem 0 0 #971515',
              backgroundColor: '#971515',
              color: 'white',
              padding: '1rem',
            }}
          >
            Formations
          </h1>
        </div>
        <div className="columns">
            <div className="column is-10 is-offset-1 ">
              <h2 className="has-text-centered has-text-weight-semibold is-size-2">
                Les enjeux de la formation automobile
              </h2>
              <p className="column is-10 is-offset-1 is-size-5">
                L’ automobile est devenue un outil social indispensable pour une grande majorité des jeunes.Au - delà du plaisir de conduire, l’ utilisation d’ une voiture est souvent indispensable pour les études, le travail ou les loisirs.Rouler en sécurité est donc une nécessité pour tous.

              Les conducteurs débutants représentent une part trop importante des tués et des blessés sur la route.Un nouveau programme de formation a donc été mis en place pour renforcer l’ éducation routière.

              L’ objectif général étant d’ amener tout automobiliste débutant à la maîtrise de compétences en termes de savoirs, savoir - faire, savoir - être et savoir - devenir. 
                </p>
            </div>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
