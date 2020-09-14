// react documentation - pas utilisé sur le site, intégré dans les pages
import React from 'react';

function Form() {
    const [state, setState] = React.useState({
      firstName: "",
      lastName: "",
      email:"",
      contacter:"uniquement pour repondre à ce message",
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
      }

      return (

   
        <form onSubmit={handleSubmit}>
            <h3>Bonjour {state.firstName} {state.lastName} !</h3>
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
        <textarea name="email" value={state.email} onChange={handleChange} />
      </label>
      <label>
        Me contacter
        <select name="contacter" onChange={handleChange} value={state.contacter}>
          <option value="1x">repondre à ce message</option>
          <option value="non">non</option>
          <option value="inviter">m'inviter aux plenières</option>
          <option value="informer">m'informer de tous les activités</option>
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
      

      </form>
      );
    }
  


export default Form