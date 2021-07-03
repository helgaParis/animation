import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/Home.module.css'
import formstyles from '../styles/form.module.css'
import Link from 'next/link'
import React from 'react'

export default function Contribue() {
  const email='conseil14@asf-web.fr' //pour le email-link à la fin
  {/* Definir une constante dans le state - contactdata- et la façon pour la modifier - setContactdata en utilisant React state et useState 
    La constante contient le contenue des champs du formulaire*/}
    const [contactdata, setContactdata] = React.useState({
      firstName: "",
      lastName: "",
      email:"",
      message:"",
      // show: true
      })
    
    {/* handle Change lit chaque changement d'n événement, en ce cas le changement en écrivant dans les cases du formulaire 
        La fonction prend en argument les événements dans les champs ciblés par l'utilisateur 
        Elle prend ce qu'existe déjà et ajoute chaque signe tapé*/}
      function handleChange(evt) {
        const value = evt.target.value;
        setContactdata({
          ...contactdata,
          [evt.target.name]: value
        });
      }
  
  {/* Au moment de l'envoi: prevent default, le console log peut être decommenté pour controler si tous les champs fonctionnent
   Le fetcher contacte l'api/mail en post , avec des headers et le contenu du formlaire (la constante dans le state), transformé en text (stringified ) dans le body
   après le travail de l'api, then, un check, if la reponse est ok (200). Decommenter les console log ou l'alerte avec le status pour vérifier quand cela se passe. Après le 200, le formulaire se vide.
   Independant de la reponse, le window alert dit merci - on pourrait le mettre avant le reload, quand c'est confirmé par l'api, mais cela peut prendre trop de temps. Le mail arrive souvent avant la reponse 200.
    */}
      function handleSubmit(evt) {
        evt.preventDefault();
          {/* console.log('ici il devrait avoir le resultat : '+
           state.firstName + '  ' + state.lastName + '  ' + state.email+ '  ' + state.message); */}
        fetch("/api/mail", {
          method: "POST",
          headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
          body: JSON.stringify(contactdata),
          }).then((res) => {
            //console.log("Response received");
            if (res.status === 200) {
              //console.log("Response succeeded!");
              //alert(res.status);
              //ici c'est sur que le mail a été envoyé, raffraichis la page
              window.location.reload();
            }
      });
      // ici c'est seulement envoyé à l'api
      alert("Merci pour votre contribution!");
    }


    return (
      <Layout >
        <Head>
          <title>{siteTitle}</title>
        </Head>     
        <div>   
        <h1 className={styles.title}>Contacter le Conseil de Quartier</h1>
        <form onSubmit={handleSubmit}>
          <label>
              Prénom                                
              <input
                className={formstyles.input}
                type="text"
                name="firstName"
                required
                value={contactdata.firstName}
                onChange={handleChange}
              />
          </label>
          <label>
            Nom de famille
            <input
             className={formstyles.input}
              type="text"
              name="lastName"
              required
              value={contactdata.lastName}
              onChange={handleChange}
            />
          </label>
          <br/>
          <label>
            Adresse Email
            <input
              className={formstyles.input}
              type="email"
              name="email" 
              required 
              value={contactdata.email} 
              onChange={handleChange}
            />
          </label>
          <br/>
          <label>
            Ma contribution
          <br/>
          <textarea 
            className={formstyles.text}
            name="message" 
            required 
            value={contactdata.message} 
            onChange={handleChange}
           />
          </label>
          <br/>
          <label>
            <input
            className={formstyles.submit}
            type="submit" 
            value="Envoyer"
            />
          </label>
        </form>
        </div>
        <div className={formstyles.extra}>
        <p>Vous pouvez nous envoyer vos propositons par email également</p>
        <h4><a href={`mailto:${email}?subject=Contributions - Conseil de Quartier JM PO&body=Ma contribution : `}>Email : conseil14@asf-web.fr</a></h4>
        </div>
              </Layout>
    )
  }