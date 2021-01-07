import React from "react";
import { Helmet } from 'react-helmet'; 

import Layout from "../../components/Layout";
import ProgFormIllu from "../../../static/img/programme-de-formations.svg";
import EvaIllu from "../../../static/img/évaluations.svg";
import LivretIllu from "../../../static/img/livret.svg";
import PermisIllu from "../../../static/img/permis-de-conduire.svg";
import {Steps} from "antd";

export default class BlogIndexPage extends React.Component {
  state = {
    current: 1,
  };

  onChange = current => {
    this.setState({
      current: current,
    });
  };

  render() {
    const {Step} = Steps;

    return (
      <Layout>
        <Helmet title={`Formations - Auto-école Sainte-Clotilde`}/>
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
              lineHeight: "1.125",
            }}
          >
            Formations
          </h1>
        </div>
        <section className="section section--gradient">
          <div className="container">
            <div className="section">
              <div className="columns">
                <div className="column is-10 is-offset-1 ">
                  <h2 className="has-text-left has-text-weight-semibold is-size-2">
                    Les enjeux de la formation automobile
                  </h2>
                </div>
              </div>
              <div className="columns">
                <div className="column is-10 is-offset-1 ">
                  <p className="has-text-left is-size-5">
                    L’ automobile est devenue un outil social indispensable pour
                    une grande majorité des jeunes. <br/>Au-delà du plaisir de
                    conduire, l’utilisation d’ une voiture est souvent
                    indispensable pour les études, le travail ou les
                    loisirs. Rouler en sécurité est donc une nécessité pour tous.
                    Les conducteurs débutants représentent une part trop
                    importante des tués et des blessés sur la route. Un nouveau
                    programme de formation a donc été mis en place pour
                    renforcer l’éducation routière. L’objectif général étant
                    d’amener tout automobiliste débutant à la maîtrise de
                    compétences en termes de savoirs, savoir-faire, savoir-être et savoir-devenir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="columns" data-sal="slide-up" data-sal-duration="500">
                  <div className="column is-6 is-offset-1">
                    <h3 className="is-size-3">Le programme de formation</h3>
                    <p className="is-size-6">
                      Ce programme se veut une vue d’ensemble, aussi exhaustive
                      que possible, des compétences qu’un conducteur responsable
                      doit acquérir pour ne pas mettre sa sécurité et celle des
                      autres en danger. Ce qui est appris en formation doit,
                      bien entendu, progresser et évoluer après l’obtention du
                      permis de conduire, en tenant compte des mêmes objectifs
                      sécuritaires que lors de l’apprentissage. Au travers de ce
                      programme, sont expliquées les règles du code de la route
                      ainsi que l’influence des lois physiques, psychologiques
                      et physiologiques. Des cours théoriques et pratiques
                      permettront d’atteindre les objectifs définis. Le
                      formateur sera présent pour guider et conseiller le
                      candidat, mais également pour mettre en place des tests de
                      connaissances et de capacités.
                    </p>
                  </div>
                  <div className="column is-4 column is-hidden-mobile">
                    <img
                      src={ProgFormIllu}
                      alt="programme-de-formation"
                      width="500"
                    />
                  </div>
                </div>
                <div
                  className="columns"
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-duration="500"
                >
                  <div className="column is-4 is-hidden-mobile">
                    <img src={EvaIllu} alt="évaluations" width="500" />
                  </div>

                  <div className="column is-7">
                    <h3 className="is-size-3">Les évaluations</h3>
                    <p className="is-size-6">
                      Ce programme se veut une vue d’ensemble, aussi exhaustive
                      que possible, des compétences qu’un conducteur responsable
                      doit acquérir pour ne pas mettre sa sécurité et celle des
                      autres en danger. Ce qui est appris en formation doit,
                      bien entendu, progresser et évoluer après l’obtention du
                      permis de conduire, en tenant compte des mêmes objectifs
                      sécuritaires que lors de l’apprentissage. Au travers de ce
                      programme, sont expliquées les règles du code de la route
                      ainsi que l’influence des lois physiques, psychologiques
                      et physiologiques. Des cours théoriques et pratiques
                      permettront d’atteindre les objectifs définis. Le
                      formateur sera présent pour guider et conseiller le
                      candidat, mais également pour mettre en place des tests de
                      connaissances et de capacités.
                    </p>
                  </div>
                </div>
                <div
                  className="columns"
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-duration="500"
                >
                  <div className="column is-6 is-offset-1">
                    <h3 className="is-size-3">Le livret d'apprentissage</h3>
                    <p className="is-size-6">
                      Apprendre à conduire est une démarche éducative exigeante.
                      Le livret d’apprentissage permet de guider l’apprenti dans
                      sa progression avec l’aide du formateur, enseignant
                      diplômé de la sécurité routière. Il est, avec la demande
                      de permis de conduire (CERFA 02), le document
                      indispensable et obligatoire lors des cours théoriques et
                      pratiques. Dans ce livret se trouvent :
                    </p>  
                      <ul style={{marginTop: "1rem"}}>
                        <li>
                          - Les documents obligatoires concernant les différents
                          cursus de formation (traditionnelle, AAC ou conduite
                          supervisée)
                        </li>
                        <li>
                          - Les compétences à maîtriser et à valider lors de la
                          formation
                        </li>
                      </ul>
                    <p>  
                      Ce livret guide l’apprenti et lui permet de savoir « où il
                      en est » mais aussi et surtout « où il va », ce qui lui
                      permettra de devenir progressivement autonome et
                      compétent.
                    </p>
                  </div>
                  <div className="column is-4 is-hidden-mobile">
                    <img src={LivretIllu} alt="évaluations" width="500" />
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-4 is-hidden-mobile">
                    <img src={PermisIllu} alt="évaluations" width="500" />
                  </div>
                  <div className="column is-7">
                    <h3 className="is-size-3">
                      L'examen du permis de conduire
                    </h3>
                    <p
                      className="is-size-6"
                      data-sal="slide-up"
                      data-sal-relay="300"
                      data-sal-duration="500"
                    >
                      Une fois les compétences validées, l’apprenti est présenté
                      à l’examen du permis de conduire. Il sera pris en charge
                      par un formateur qui l’accompagnera au centre d’examen 15
                      minutes avant le début de l’épreuve. Les candidats sont
                      évalués par un expert l’IPCSR : l’inspecteur du permis de
                      conduire et de la sécurité routière. L’épreuve étant
                      individuelle, chaque candidat se présentera, dans l’ordre
                      prédéfini, à l’expert : l’inspecteur du permis de conduire
                      et la sécurité routière, qui lui précisera ce qu’il aura à
                      faire :
                    </p>

                    <ul
                      style={{marginTop: "1rem"}}
                      className="is-size-6"
                      data-sal="slide-up"
                      data-sal-relay="300"
                      data-sal-duration="500"
                    >
                      <li>
                        - Réaliser un parcours empruntant des voies à caractère
                        urbain, routier et / ou autoroutier
                      </li>
                      <li>
                        - Suivre un itinéraire ou se rendre vers une destination
                        préalablement établie, en se guidant de manière
                        autonome, pendant une durée globale d’environ cinq
                        minutes
                      </li>
                      <li>
                        - Réaliser deux manœuvres différentes, dont une au moins
                        en marche arrière
                      </li>
                      <li>
                        - Procéder à la vérification d’un élément technique à
                        l’intérieur ou à l’extérieur du véhicule, répondre à une
                        question en lien avec la sécurité routière et à une
                        question portant sur les notions élémentaires de
                        premiers secours
                      </li>
                      <li>
                        - Appliquer les règles du code de la route et les
                        prescriptions relatives aux jeunes conducteurs
                      </li>
                      <li></li>
                      <li>
                        - Adopter une conduite économie en carburant et limitant
                        les rejets de gaz à effet de serre
                      </li>
                      <li>
                        - Faire preuve de courtoisie envers les autres usagers,
                        et notamment les plus vulnérables
                      </li>
                    </ul>
                    <p
                      className="is-size-6"
                      data-sal="slide-up"
                      data-sal-relay="300"
                      data-sal-duration="500"
                    >
                      Après vérification de son identité, l’épreuve débutera par
                      l’installation au poste de conduite et se poursuivra
                      durant près de 25 minutes, jusqu’au retour au point de
                      départ initiale. L’élève devra être poli, respectueux et
                      courtois envers l’expert, ce quel que soit le déroulement
                      de l’épreuve. Il devra également adopter un comportement
                      et un langage appropriés. L’évaluation réalisée par
                      l’expert est basée sur des textes réglementaires et
                      instructions précises qui en fixent les modalités. Cette
                      évaluation consiste en un bilan des compétences
                      nécessaires et fondamentales devant être acquises pour une
                      conduite en sécurité. L’expert s’attache à valoriser les
                      acquis comportementaux plutôt que les faiblesses. Il
                      réalise ainsi un inventaire des points positifs et des
                      points négatifs restitués par rapport à une compétence
                      donnée.
                      <br />
                      Un échange entre l’expert retranscrit de façon formelle ce
                      bilan de compétences dans une grille d’évaluation. À
                      l’issue de l’épreuve, l’expert retranscrit de façon
                      formelle ce bilan de compétences dans une grille
                      d’évaluation. L’évaluation sera positive si la note obtenu
                      lors de ce bilan est supérieure ou égale à 20 points sans
                      avoir commis d’erreur éliminatoire. Il sera donc négatif
                      si la note obtenue est inférieure à 20 points ou si
                      l’élève a commis une ou plusieurs fautes éliminatoires. Le
                      formateur, présent le jour de l’évaluation, pourra
                      expliquer à l’élève les différentes notes obtenues et les
                      commentaires de l’expert, ce qui permet en cas d’échec de
                      savoir quels sont les points à travailler et à améliorer.
                    </p>
                    <Steps
                      direction="vertical"
                      size="large"
                      current={this.state.current}
                      onChange={this.onChange}
                      data-sal="slide-up"
                      data-sal-relay="300"
                      data-sal-duration="500"
                    >
                      <Step
                        title="La vérification de la recevabilité des documents d’examen"
                        description=""
                      />
                      <Step
                        title="L’accueil du candidat, la vérification de son identité et s’il a suivi une formation selon la formule de l’apprentissage anticipé de la conduite, de son attestation de fin de formation initiale ;
"
                        description=""
                      />
                      <Step
                        title="La présentation de l’épreuve par l’examinateur ;
"
                        description=""
                      />
                      <Step
                        title="L’installation au poste de conduite ;
"
                        description=""
                      />
                      <Step
                        title="Les réglages du véhicule nécessaires avant le départ et réalisés par le candidat ;
"
                        description=""
                      />
                      <Step
                        title="Une phrase de conduite effective d’une durée minimale de 25 minutes ;
"
                        description=""
                      />
                      <Step
                        title="La réalisation d’un test de la vue ;
"
                        description=""
                      />
                      <Step
                        title="La réalisation de deux manœuvres particulières à tester en relation avec la sécurité routière (un freinage pour s’arrêter avec précision et une manœuvre en marche arrière) ;
"
                        description=""
                      />
                      <Step
                        title="Des questions portant notamment sur la vérification d’un élément technique en relation avec la sécurité routière, à l’intérieur et à l’extérieur du véhicule ;
"
                        description=""
                      />
                      <Step
                        title="La mise en action d’un accessoire ou commande d’accessoire en cours de circulation ;
"
                        description=""
                      />
                      <Step
                        title="L’établissement du certificat d’examen du permis de conduire CEPC
"
                        description=""
                      />
                    </Steps>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
