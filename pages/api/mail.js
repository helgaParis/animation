
// installer dotenv et nodemailer
// definir le email mp dans .env local et sur le serveur, dans le cloud

export default function handler (req, res) {
  require('dotenv').config()

  //si un autre méthode que post (notre formulaire) est employé, le handler refuse de traiter la requette. Pour tester, débloquer la reponse json
  // if (req.method != "POST") {
	// return res.status(405)
	// //.json({ message: "Method not allowed" });
  // }
  
	let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
		port: 465,
		host: "smtp.gmail.com",
		auth: {
		  user: 'artists.asf@gmail.com',
		  pass: process.env.mailpassword,
		},
		secure: true,
 	})
 
  	const mailData = {
		from: `artists.asf@gmail.com`,
		to: 'artists.asf@gmail.com',
		subject: `Message via le formulaire de contact du site `,
		text: req.body.message + " | Envoyé de : " + req.body.email,
		html: `<div style="font-size:1.3em; font-weight:600;">
			<p>Repondre à cette adresse email :
			${req.body.email}</p>
			<p>Nom : ${req.body.lastName} </p>
			<p>Prénom: ${req.body.firstName}</p>
			<p>Message :</p>
			<div style="background-color:bisque; font-size:1.3em">
			${req.body.message}
			</div>
		</div>
		`
	}
	//pour tester ou voir toute le processus, mettre console.log(info) 
    transporter.sendMail(mailData, function (err, info) {
		if(err)
		  console.log(err)
		else
		  console.log(info.messageId)
  		})
	//il faut que le handler retourne un status 200 au fetcher pour que le formulaire se vide ou autre chose se passe sur la page
	res.status(200).json({resultat:"ok"})
	//il semble avoir un bug - il faut ajouter un json vide (ou un message réel) pour que le handler signale la fin. Alternativement, on peut faire un redirect, ex à une page "Merci pour la contribution"
	//res.redirect([status,] path)

}
//Next a un resolver inclus dans le handler, un external resolver peut terminer le processus, mais n'envoie pas de status 200.
// export const config = {
// 	  api: {
// 		externalResolver: true,
// 	  },
// 	}