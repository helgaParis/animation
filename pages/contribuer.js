import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/Home.module.css'
import React from 'react'
//import formstyles from '../styles/forms.module.css'

export default function Contribuer() {
    const [state, setState] = React.useState({
        firstName: "",
        lastName: "",
        email:"",
        contacter:"repondre à ce message",
        conribution:""
      })
      function handleChange(evt) {
          const value = evt.target.value;
          setState({
            ...state,
            [evt.target.name]: value
          });
        }
  
      function handleSubmit(evt) {
          event.preventDefault();
          console.log('ici il devrait avoir le resultat: '+
           state.firstName + '  ' + state.lastName + '  ' + state.email+ '  ' + state.contacter+ '  ' + state.contribution
          );
          alert("Merci pour votre contribution!");
         
        }


    return (
        <Layout >
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <main className={styles.main}>
        
        <h1 className={styles.title}>Participer au travail du Conseil de Quartier</h1>
        <p>Vous pouvez nous envoyer vos propositons ou vous inscrire sur notre liste de communication</p>

      
   
        <form onSubmit={handleSubmit}>
           
        <label>
          Prénom                                
          <input
            type="text"
            name="firstName"
            value={state.firstName}
            onChange={handleChange}
          />
        </label>
        <label>
          Nom de famille
          <input
            type="text"
            name="lastName"
            value={state.lastName}
            onChange={handleChange}
          />
        </label>
        <label>
        Adresse Email
        <input type="email" name="email" value={state.email} onChange={handleChange} />
      </label>
      <label>
        Me contacter
        <select name="contacter" onChange={handleChange} value={state.contacter}>
          <option value="1x">repondre à ce message</option>
          <option value="non">non</option>
          <option value="invitater">m'inviter aux plenières</option>
          <option value="informer">m'informer de tous les activités</option>
          <option value="collaborer">je souhaite collaborer dans unce commission</option>
        </select>
      </label>
        <label>
        Ma contribution
        <textarea name="contribution" value={state.contribution} onChange={handleChange} />
      </label>
      <label>
      Envoyer
      <input type="submit" value="Envoyer"></input>
      </label>
      <h3>Bonjour {state.firstName} {state.lastName} !</h3>
     <p>Vous allez nous envoyer cela :</p>
    <h3>{ "mail de contact : " + state.email}</h3>
    <p>{'Vore adresse mail servira à  '+state.contacter}</p>
    <h4>{state.contribution}</h4>


      </form>
      
      
      </main>
      </Layout>
    )
  }