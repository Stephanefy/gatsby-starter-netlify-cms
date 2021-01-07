import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../components/Layout'
import BusinessHours from '../components/BusinessHours';
import CodeWithTeacher from '../components/CodeWithTeacherHours';
import { Helmet } from 'react-helmet'; 
import {graphql} from 'gatsby';

import illuHoraires from '../../static/img/undraw_time_management_30iu.svg';


function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class HorairePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  render() {
    return (
      <Layout>
        <section className="section" style={{marginTop: '100px'}}>
        <Helmet title={`Horaires - Auto-école Sainte-Clotilde`}/>
        <div className='columns is-centered is-mobile'>
          <img src={illuHoraires} alt="contact" width="400" />
        </div>  
          <div className="container">
            <div className="content">
            <div className='columns is-centered my-6'>
                <h1 className="is-size-2">Votre auto-école sur Sainte Clotilde</h1>

            </div>

        
              <div className="columns is-centered my-2">
                  <h3>Horaires d'ouverture de notre Bureau</h3>
              </div>
              <div className="columns is-centered">
                <span>*Les séances de code sans enseignant se déroulent aux mêmes heures</span>
              </div>
              <div className="columns is-centered" style={{margin:"20px 0"}}>
                  <BusinessHours/>
              </div>
              <div className="columns is-centered my-2">
                  <h3>Horaires de code avec enseignant</h3>
              </div>
              <div className="columns is-centered" style={{margin:"20px 0"}}>
                  <CodeWithTeacher/>
              </div>
            </div>
          </div>
          <div className="columns is-centered">
            <div className="column is-4 has-text-centered is-size-6 has-text-weight-semibold	">
                <p>
                L'auto-école Sainte-Clotilde est située entre la rue de l'Ancienne Poste et la rue Lacroix, à seulement quelques minutes à pied de la Mairie de Sainte-Clotilde et du Collège Les Deux Canons. Inscrivez-vous sans plus attendre pour vous préparer à l'examen du code de la route et du permis de conduire automobile.
                </p>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export const HorairePageQuery = graphql`
  query HorairePage{
    markdownRemark(id: {eq:"e49c3538-4c7a-53e1-a3a4-08aec26e8cba"}){
      frontmatter{
        title
      }
    }
  }
`