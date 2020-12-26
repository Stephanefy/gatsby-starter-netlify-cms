import React from "react";
import {navigate} from "gatsby-link";
import Layout from "../../components/Layout";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isValidated: false};
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: {"Content-Type": "application/x-www-form-urlencoded"},
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
      <Layout>
        <section className="section" style={{marginTop: "100px"}}>
          <div className="columns is-centered"></div>
          <div className="container">
            <div className="content">
              <div className="columns is-centered my-6">
                <h1 className="is-size-2">Mentions légales</h1>
              </div>
              <div>
                <p className="has-text-weight-semibold">
                  Ce site est édité par : Madame Marie Mounichetty
                </p>
                <p>
                  Capital : Adresse : 18 RUE LORY LES HAUTS 97490 SAINT-DENIS
                  FRANCE
                </p>
                <p>Adresse électronique : Téléphone : 02 62 28 46 25</p>
                <p>
                  N° Registre du Commerce ou Répertoire des métiers : N° SIRET
                  de l’établissement : 39951856200018
                </p>
                <p>
                  N° d’assujettissement à la TVA :<br />
                  Titre professionnel – Autorisation :<br />
                  Référence aux règles professionnelles applicables :<br />
                  Qualité de locataire gérant ou gérant mandataire :<br />
                  Mentions légales spécifiques :<br />
                  Directeur de rédaction et de publication :<br />
                  Madame Marie Mounichetty
                  <br />
                </p>
                <p>
                  Ce site a été conçu et réalisé par Agensit et est hébergé chez
                  Netlify 610 22nd Street, Suite 315, San Francisco, CA 94107
                  Site web : https://www.netlify.com
                </p>
                <h3 className="is-size-5">Protection de la vie privée</h3>
                <p>
                  Nous nous réservons le droit de modifier à tout moment la
                  présente page. Nous vous invitons par conséquent à la
                  consulter régulièrement afin de vous informer de ses
                  évolutions.
                  <br />
                  Dernière date de Mise à jour : 26/12/2020
                </p>
                <h3 className="is-size-5">
                  Identité du responsable du traitement
                </h3>
                <p>
                  Les données personnelles sont collectées par l’Annonceur du
                  site tel qu’identifié dans les mentions légales.
                </p>
                <h3>Les traitements relatifs à vos données personnelles</h3>
                <p>
                  Notre site ne demande pas d'enregistrement nominatif à ses
                  visiteurs et ne procède à aucun enregistrement nominatif pour
                  la simple consultation de ses pages. Cependant, dans certains
                  cas (formulaire de contact, fonctionnalités de partage et
                  modules sociaux, rubrique création de compte, paiement en
                  ligne...), vous pouvez être invité à laisser des données
                  personnelles (noms, prénoms, numéros de téléphones, adresses
                  postales, adresse électronique…). Le caractère obligatoire ou
                  facultatif des données vous est signalé lors de la collecte
                  par un astérisque. Le cas échéant, le formulaire de collecte
                  pourra être accompagné d'une case à cocher vous permettant
                  d'accepter ou de refuser que vos données soient utilisées à
                  des fins commerciales pour le compte de tiers, et/ou cédées à
                  des tiers et/ou de recevoir des communications commerciales de
                  l’Annonceur. Nous ne collectons aucune donnée sensible, à
                  savoir aucune donnée relative à vos origines raciales ou
                  ethniques, à vos opinions politiques, philosophiques ou
                  religieuses ou votre appartenance syndicale, ou qui sont
                  relatives à votre santé ou votre vie sexuelle. Par ailleurs,
                  lors de la consultation de notre site web et de l’utilisation
                  de nos services, nous sommes amenés à collecter et traiter des
                  données relatives à votre navigation (notamment les cookies,
                  et les pages que vous avez consultées), et à votre terminal
                  (type de navigateur utilisé, modèle et version de votre
                  système d’exploitation, résolution de votre écran, présence de
                  certains plug-ins, …). Ces données seront utilisées d’une part
                  pour adapter nos contenus et services à vos besoins, et
                  d’autre part pour réaliser des statistiques d’utilisation de
                  nos services afin de les rendre plus pertinents. Elles
                  pourront également être utilisées pour identifier les sociétés
                  s’intéressant à nos produits., et pour vous proposer des
                  offres publicitaires sur et en dehors de notre site en rapport
                  avec vos centres d’intérêt et, éventuellement, de votre
                  localité.
                </p>
                <h3 className="is-size-5">Quand ?</h3>
                <p>Nous collectons vos données notamment quand :</p>
                <ul>
                  <li>Vous créez et utilisez un compte personnel,</li>
                  <li>
                    Vous utilisez notre service (par exemple à l’occasion d’une
                    transaction en ligne, d’une prise de rdv…),
                  </li>
                  <li>Vous utilisez notre formulaire de contact,</li>
                  <li>
                    Vous naviguez sur notre site et consultez nos produits et
                    services.
                  </li>
                </ul>
                <h3>Quelles finalités ?</h3>
                <p>Nous utilisons vos données personnelles pour :</p>
                <ul>
                  <li>Vous permettre d’utiliser nos services ;</li>
                  <li>
                    Vous informer sur les services pour lesquels vous avez
                    exprimé un intérêt et qui vous sont proposés sur notre site
                    ;
                  </li>
                  <li>
                    Vous proposer des offres publicitaires et des informations
                    sur notre site en rapport avec vos centres d’intérêt ;
                  </li>
                  <li>
                    Vous contacter en réponse à une demande de votre part ;
                  </li>
                  <li>
                    Avec votre consentement, vous inscrire à une newsletter
                    et/ou vous envoyer des informations relatives à nos produits
                    et services ;
                  </li>
                  <li>
                    Nous permettre d'établir des statistiques et comptages de
                    fréquentation et d'utilisation des diverses rubriques et
                    contenus de notre site et de nos services notamment afin
                    d’adapter lesdites rubriques et lesdits contenus en fonction
                    de votre navigation.
                  </li>
                </ul>
                <h3>Cookies</h3>
                <p>Pour vous informer sur l’utilisation faite des cookies sur notre site, sur vos droits et vos moyens de vous y opposer, vous pouvez consulter la page spécialement consacrée à cette thématique en cliquant ici .</p>
                <h3>Destinataires
</h3>
                <p>Sont destinataires des données :

</p>    
                <ul>
                    <li>l’Annonceur et ses éventuels sous-traitants,
</li>
                    <li>Pour l’identification des sociétés ayant consulté notre site, et la réalisation de statistiques de fréquentation, la société Agensit,</li>
                </ul>
                <p>Toute transmission de ces données à des sociétés tierces est soumise à votre consentement préalable.</p>
                <h3>Durée de conservation
</h3>
                <p>Si vous avez été amené à créer un compte utilisateur, vos données sont conservées pendant une période de 3 ans après la dernière trace d’activité sur votre compte. Vos données de contact sont conservées pendant la période de prise de contact ainsi que pendant la durée nécessaire à des fins probatoires et de gestion des contentieux. Si vous avez consenti à l’envoi de newsletters et mails d’information commerciale, vos données seront conservées pendant 3 ans à compter de la dernière prise de contact. Si vous avez été amenés à effectuer une transaction en ligne, les données relatives aux commandes et aux paiements sont conservées pendant la période nécessaire à l’exécution de la transaction ainsi que pendant la durée nécessaire à des fins probatoire et de gestion des contentieux.</p>
                <h3>Vos droits
</h3>
                <p>Conformément à la loi Informatique et Libertés du 6 janvier 1978 modifiée, vous disposez de droits d’accès, de rectification, d’effacement, d’opposition au ou de limitation du traitement de vos données, de retrait de votre consentement.
Vous pouvez également donner des directives à notre groupe concernant l’utilisation de vos données après votre décès.</p>
<p>Vous pouvez exercer ces droits :
Auprès de l’Annonceur en utilisant les coordonnées mentionnées dans les mentions légales.
En ce qui concerne le traitement de données permettant de vous afficher des publicités ciblées : les droits peuvent s’exercer auprès de Agensit, à l'adresse suivante <a href="https://www.agensit.re">www.agensit.re</a></p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
