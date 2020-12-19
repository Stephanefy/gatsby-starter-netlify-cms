import React, {useState} from 'react'
import { Link, graphql } from 'gatsby'
import { Collapse } from 'antd';
import Layout from '../components/Layout'



export const CoursDePerfectionnementTemplate = () => {

    
    const { Panel } = Collapse;

    const text1 = `
    Certains conducteurs, ayant obtenu leur permis de conduire de longue date et s’étant tournés vers les transports en commun pour leurs déplacements quotidiens (pour multiples raisons), peuvent soudainement avoir besoin de se remettre à la conduite. Que ce soit suite à l’obtention d’un nouvel emploi, à l’arrivée d'un enfant, ou encore suite à un déménagement à la campagne, ces conducteurs peuvent avoir besoin de se remettre à niveau.
    `;

    const text2 = `
    Certaines zones de circulation atypiques, dont les règles sont spécifiques ou peu claires, peuvent surprendre et déstabiliser les usagers, les rendant moins attentifs aux aléas de la conduite. En reprenant quelques heures de conduite dans ces zones atypiques, les automobilistes pourront être prêts à tout et deviendront de véritables experts de la conduite dans ces zones.
    `

    const text3 = `
    Lorsque des usagers de la route emménagent dans un pays qui n’est pas leur pays d’origine, ils peuvent se retrouver déboussolés par certains éléments de la signalisation, ou encore par le sens dans lequel ils doivent conduire. En reprenant quelques heures de conduite, ces automobilistes pourront profiter des routes réunionnaises en toute tranquillité.
    `



    const [current, setCurrent] = useState(0);


    const onChange = (current) => {
        setCurrent(current)
    }
    
    return (
    <div style={{ marginTop: '6rem'}}>
    <section className="section">
        <h1 className="is-size-1 has-text-weight-semibold has-text-centered">
            Cours de perfectionnement
        </h1>
        <div className='columns'>
        <div className="column is-one-quarter"></div>
        <p className="column is-6 is-size-4 has-text-left">
                    Vous n'avez pas conduit pendant un moment, Vous venez d'arriver sur l'île de la Réunion et souhaitez prendre vos marques sur ses routes, tout en recevant des conseils avisés d'un moniteur agréés et expérimentés.
                    Nous vous proposons également des cours de perfectionnement !
                </p>             
            <div className='column is-one-quarter'></div>
        </div>
        <div className='columns'>
        <hr style={{ width: "30%", margin: '5em auto', border: '2px solid #BD1A1A'}}/>
      
        </div>
        <h2 className='is-size-2 has-text-centered'>Quelques raisons de s'inscrire à des cours de perfectionnement</h2>
        <div className='columns my-6'>
        
            <div className='column'></div>
            <div className='column is-10'>   
            <Collapse accordion >
                <Panel header="Titulaire du permis de conduire de longue date" key="1">
                <p>{text1}</p>
                </Panel>
                <Panel header="Anticiper les zones de circulation atypiques" key="2">
                <p>{text2}</p>
                </Panel>
                <Panel header="Suite à un emménagement à la Réunion" key="3">
                <p>{text3}</p>
                </Panel>
            </Collapse>
            </div>
            <div className='column'></div>
        </div>
 

    </section>

    
    </div>
)}



const CoursDePerfectionnementPage = () => {
    
    return(
        <Layout>
                <CoursDePerfectionnementTemplate/> 
        </Layout>
    )
}


export default CoursDePerfectionnementPage;