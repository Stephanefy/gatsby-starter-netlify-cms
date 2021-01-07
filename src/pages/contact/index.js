import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import BusinessHours from '../../components/BusinessHours';
import LeafletMap from '../../components/Map';
import { Helmet } from 'react-helmet'; 


import illuContact from '../../../static/img/handshake.svg';

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
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
        <Helmet title={`Contact - Auto-école Sainte-Clotilde`}/>
        <div className='columns is-centered'>
          <img src={illuContact} alt="contact" width="400" />
        </div>  
          <div className="container">
            <div className="content">
              <h1>Contact</h1>
              <form
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'name'}>
                    Nom*
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'name'}
                      onChange={this.handleChange}
                      id={'name'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'email'}>
                    adresse e-mail*
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'email'}
                      name={'email'}
                      onChange={this.handleChange}
                      id={'email'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'phone'}>
                    Téléphone*
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'tel'}
                      name={'phone'}
                      onChange={this.handleChange}
                      id={'phone'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'message'}>
                    Message*
                  </label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name={'message'}
                      onChange={this.handleChange}
                      id={'message'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <button className="button is-link" type="submit">
                    Envoyer
                  </button>
                </div>
              </form>
              <div className="columns is-centered" style={{margin: '80px 0'}}>
                  <ul>
                    <li style={{listStyleType:'none'}}>* Champs obligatoires</li>
                    <li style={{listStyleType:'none'}}>** Les données personnelles communiquées sont nécessaires aux fins de vous contacter. Elles sont destinées à Mme Marie Mounichetty et ses sous-traitants. Vous disposez de droits d’accès, de rectification, d’effacement, de portabilité, de limitation, d’opposition, de retrait de votre consentement à tout moment et du droit d’introduire une réclamation auprès d’une autorité de contrôle, ainsi que d’organiser le sort de vos données post-mortem. Vous pouvez exercer ces droits par voie postale à l'adresse18 rue Lory-les-Hauts, 97490 Sainte-Clotilde, La Reunion, ou par courrier électronique à l'adresse mounichettymareannick.autoecoles@sfr.fr. Un justificatif d'identité pourra vous être demandé. Nous conservons vos données pendant la période de prise de contact puis pendant la durée de prescription légale aux fins probatoire et de gestion des contentieux.</li>
                  </ul>
              </div>
              <div className="columns is-centered my-2 ">
                  <h3>Horaires d'ouverture</h3>
              </div>
              <div className="columns is-centered" style={{margin:"20px 0"}}>
                  <BusinessHours/>
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
        <LeafletMap />
      </Layout>
    )
  }
}
