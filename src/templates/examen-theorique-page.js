import React, {useState} from 'react'

import Layout from '../components/Layout';
import Separator from '../components/Separator';
import {Steps} from "antd";
import examenTheoPdf from '../../static/pdf/thèmes-exam-théorique.pdf';
import { Document, Page, pdfjs  } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;





const { Step } = Steps;

export const ExamenTheoriqueTemplate = () => {

    const [numPages, setNumPages] = useState(6);
    const [pageNumber, setPageNumber] = useState(1);
    
    const goNextPage = () => {
        setPageNumber(prevPageNumber => prevPageNumber + 1)
    }
    const goPreviousPage = () => {
        setPageNumber(prevPageNumber => prevPageNumber - 1)
    }



    const [current, setCurrent] = useState(0);


    const onChange = (current) => {
        setCurrent(current)
    }
    
    return (
    <div style={{ marginTop: '6rem'}}>
    <section className="section">
        <div className='columns mx-4'>
        <div className='column'></div>

        <div className='column is-10'>
            <h1 className="is-size-1 has-text-weight-semibold has-text-left">
                Éxamen théorique
            </h1>
        </div>
        <div className='column'></div>

        </div>
        <div className='columns mx-4'>   
        <div className='column'></div>

        <p className="column is-10 is-size-4 has-text-left">
        L’examen du code de la route est un examen officiel. Il s’agit d’évaluer si les candidats sont en mesure de comprendre ce qui se passe autour de leur voiture, ainsi qu’à l’intérieur, d’appréhender la route et d’adapter son comportement à toute situation.
C’est pourquoi l’examen du code de la route comporte dix thématiques, et chacune d’entre elles doit être parfaitement connue du candidat.
                </p>             
            <div className='column'></div>
        </div>
        <div className="has-text-centered">
          <Separator/>
        </div>
      
        <h2 className='is-size-2 has-text-centered'>Déroulement de l'éxamen théorique général</h2>
        <div className='columns my-6'>
        
            <div className='column'></div>
            <div className='column is-10'>   
            <Steps direction="vertical" size="large" current={current} onChange={onChange}>
                <Step title="L'inscription" description="Votre auto auto-école se charge de tout l’aspect administratif de votre inscription. L’examen du code de la route vous est facturé 30€ par le centre d’examen agréé que vous aurez choisi qui correspond à la redevance*.

*Le décret n°2016-516 du 26/04/2016 instaure une redevance de 30 € TTC due par les candidats à l’épreuve théorique générale du permis de conduire. Cette redevance va permettre de couvrir les frais d’organisation de l’épreuve (inscription, organisation, remise de l’attestation de résultat). En cas d’échec à l’épreuve, lors de la nouvelle inscription au code, la redevance est à nouveau due (Lien LégiFiscal))

En plus de la redevance, l’auto l’auto-école se réserve le droit de facturer aux candidats des frais d’accompagnement" />
                <Step title="l’organisation" description="Pour pouvoir passer votre code, vous devez vous présenter le jour de votre examen 15 minutes minimum avant l’heure précise du début de la session. Attention, aucun retard ne sera toléré ; pensez donc à anticiper les éventuels bouchons ou problèmes de transport. Vous devrez également apporter comme documents la convocation que vous aurez reçue, ainsi qu’une pièce d’identité." />
                <Step title="le déroulement" description="Vous présentez votre pièce d’identité ainsi que votre convocation ;
Vous déposez éventuellement vos effets personnels dans une consigne ;
Une tablette tactile et un casque audio sont délivrés à chaque candidat ;
Chacun prend connaissance du règlement en vigueur pour l’examen du code ;
Vous avez ensuite 30 minutes pour répondre à 40 questions. Un délai de 20 secondes vous est octroyé pour répondre à chacune de ces questions, qui peuvent être accompagnées d’une photo, ou d’une vidéo ;
Une fois l’examen terminé, vous devrez remettre le matériel à l’examinateur ;
Vos résultats vous sont communiqués par mail, sous 48h" />
                <Step title="les questions" description={<div>
                    <p>Chacune des questions posées le jour de l’examen aborde l’un des 9 thèmes de la structure du code de la route :</p>
                    <ul>
                      <li>La circulation routière</li>
                      <li>Le conducteur</li>
                      <li>La route</li>
                      <li>Les autres usagers</li>
                      <li>Les notions diverses</li>
                      <li>Les premiers secours</li>
                      <li>Prendre et quitter son véhicule</li>
                      <li>La mécanique et les équipements</li>
                      <li>La sécurité du passager et du véhicule</li>
                      <li>L’environnement</li>

                  </ul>
                </div>}

 />
            <Step title="Les résultats" description="Vous avez obtenu une note supérieure ou égale à 35/40 ? BRAVO ! Vous avez réussi votre examen du code de la route et pouvez dès à présent vous lancer dans votre formation à la conduite.
Si, par hasard, vous n’avez pas obtenu le résultat souhaité, surtout : pas de panique. Vous pourrez repasser l’examen plus tard. Profitez pour reviser et vous améliorer davantage" />

            </Steps>
            </div>
            <div className='column'></div>
        </div>
                    

    </section>
    <div className="columns is-mobile is-centered my-6">
  
      <Document
        file={examenTheoPdf}
        className="card"
      >
  
        <Page pageNumber={pageNumber} />
       <div className="columns is-mobile is-centered my-4">
       {pageNumber > 1 &&
        <button onClick={goPreviousPage} className="button is-info mx-2">
         page précédente
      </button>
       }
       {
        pageNumber < numPages && 
           <button onClick={goNextPage} className="button is-info">
            page suivante
             </button>
       }
    
      
       </div> 
       <div className="columns is-mobile is-centered my-2">
       <p>Page {pageNumber} / {numPages}</p>
       </div>
       
      </Document>
     
    
    </div>
    
    </div>
)}



const ExamenTheorquePage = () => {
    
    return(
        <Layout>
                <ExamenTheoriqueTemplate/> 
        </Layout>
    )
}


export default ExamenTheorquePage