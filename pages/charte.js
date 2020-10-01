import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/Home.module.css'
import utilStyles from '../styles/layout.module.css'

export default function Charte() {

    return (
        <Layout >
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <main className={styles.main}>
        
        <h1 className={styles.title}>La charte des Conseils de Quartier</h1>
        <p>Extraits :</p>
        <p>Le Conseil du 14ème arrondissement a décidé, dans le cadre du développement de la
démocratie locale, la mise en place de six Conseils de quartier :
            <ul>
                <li>Didot-Plaisance-Porte-de-Vanves</li>
                <li className={utilStyles.boldText}>Jean-Moulin-Porte-D’Orléans</li>
                <li>Montsouris-Dareau</li>
                <li>Montparnasse-Raspail</li>
                <li>Mouton-Duvernet</li>
                <li>Pernety</li>
            </ul>
  </p>
  <p>Les Conseils de quartier, ouverts à toutes celles et à tous ceux qui habitent, travaillent, étudient ou exercent une 
    activité associative dans le 14ème arrondissement, ont pour objectif de leur permettre de participer à la préparation 
    des décisions locales qui les concernent. Ils visent à favoriser une citoyenneté active au plus près du lieu de vie ou 
    d’activité de chacun.</p>
  <p>Ils s’inscrivent dans une démarche de démocratie participative, complémentaire de la démocratie représentative fondée 
    sur l’expression du suffrage universel. Ils sont aussi un complément de la vie associative, ciment de lien social et terrain 
    d’engagements civiques.</p>
  <p>Ils fonctionnent et interviennent dans le respect des valeurs de la République et de la Déclaration des Droits de l’Homme 
    et du Citoyen.</p>
  <p>Ils visent à représenter la population dans sa diversité, notamment en assurant la présence de jeunes dès l’âge de seize ans, 
    ainsi que la parité entre hommes et femmes, sans distinction de nationalité.</p>
  <p>
    <a href="/charte.pdf" target="_blank">Voir toute la charte en pdf dans un nouveau onglet</a> 
  </p>
  <h2>I. Rôle et compétences</h2>
  <h3>Article 1 : Définition du Conseil de quartier</h3>
  <p>Le Conseil de quartier est une commission consultative du Conseil d’arrondissement, assurant la participation des habitants 
    à la vie de leur quartier et ayant faculté de proposition, de suggestion et d’initiative sur tous les aspects de la vie du 
    quartier. Il ne jouit pas de la personnalité morale et n'a pas de faculté décisionnaire.</p>
  <h3>Article 2 : Création des Conseils de quartier</h3>
  <p>Le Conseil de quartier est créé par délibération du Conseil d’arrondissement. Il est mis en place par le Conseil d’arrondissement, 
    jusqu'à la date de son renouvellement selon les modalités prévues à l'article 9.</p>
  <h3>Article 3 : Rôle des Conseils de quartier</h3>
  <p>Le Conseil de quartier est un lieu :
      <ul>
          <li>d'information, de consultation et de concertation sur les orientations, les projets, les
décisions de la municipalité concernant le quartier ou ayant une incidence sur son
devenir et son développement ;</li>
          <li>d'écoute des problèmes et des attentes des habitants pour les synthétiser et les
faire connaître à la mairie ;</li>
          <li>d’élaboration et d’accompagnement, notamment dans le cadre du Budget
Participatif Parisien, de projets d’intérêt collectif et de propositions en direction de la
mairie d’arrondissement sur toute question intéressant le quartier ;</li>
          <li>de suivi des projets retenus dans le cadre du Budget Participatif Parisien et
concernant le quartier, quelle que soit l’origine de la proposition ;</li>
          <li>de dialogue entre les différents acteurs du quartier, quelles que soient leurs origines
et leurs opinions.</li>
      </ul>
    </p>
  <h3>Article 4 : Compétences particulières des Conseils de quartier</h3>
  <p>Les Conseils de quartier sont libres de définir les thèmes de travail qu’ils souhaitent engager. Toutefois des référents 
    volontaires sont demandés sur six thématiques d’intérêt local. (voir art.14)</p>
  <h3>Article 5 : Pouvoir de proposition des Conseils de quartier</h3>
  <p>Les Conseils de quartier disposent d’un pouvoir de proposition dans la définition des priorités d'investissements localisés 
    de la mairie d’arrondissement, concernant leur périmètre.</p>
  <p>Le Conseil de quartier peut adresser au Maire d’arrondissement des vœux. Ces vœux doivent être obligatoirement inscrits à 
    l’ordre du jour de la réunion plénière, et être approuvés par la majorité d’un quorum d’au moins 20 conseillers présents lors 
    de leur vote en séance plénière. Les vœux peuvent concerner tout sujet d’intérêt local. Le Maire reste seul maître de leur 
    inscription à l’ordre du jour du Conseil d’arrondissement, conformément au Règlement Intérieur de ce dernier.</p>
  <p>Les vœux des Conseils de quartier deviennent des vœux du Conseil d’arrondissement si ce dernier les adopte. Les conseillers 
    d’arrondissement disposent, à l'égard des projets de vœux qui leur sont soumis, du droit de présenter des amendements et 
    des alternatives.</p>
  <p>Après examen des amendements ou contre-projets, le Conseil d'arrondissement se prononce par un vote sur le texte du vœu 
    qui lui est soumis. Il peut l'adopter en totalité ou partiellement, ou le rejeter. Les vœux adoptés ne sont pas 
    systématiquement remontés au Conseil de Paris, ils doivent être portés par un groupe politique ou un conseiller de Paris, 
    conformément au Règlement intérieur du Conseil de Paris.</p>
  <p>Une fois par semestre, le Maire d’arrondissement donne une information au Conseil d’arrondissement sur les suites données 
    aux vœux adoptés.</p>
  <h3>Article 6 : Budget</h3>
  <p>Chaque Conseil de quartier est composé de 60 membres tirés au sort parmi la liste des candidats qui, au titre de leur 
    résidence ou de leur activité professionnelle, associative ou étudiante, concourent à la vie du quartier.</p>
  <p>Aucune personne physique ne peut siéger dans plus d’un Conseil de quartier.</p>
  <p>La fonction de conseiller de quartier suppose une assiduité aux réunions. La parité femmes - hommes sera respectée.</p>
  <h3>Article 7 : Délimitation territoriale de chaque conseil</h3>
  <p>La compétence territoriale du Conseil de quartier correspond aux limites indiquées en annexe de la présente charte.</p>
  <h2>II. Composition, désignation et renouvellement</h2>
  <h3>Article 8 : Composition des Conseils de quartier</h3>
  <p>Chaque Conseil de quartier est composé de 60 membres tirés au sort parmi la liste des candidats qui, au titre de leur 
    résidence ou de leur activité professionnelle, associative ou étudiante, concourent à la vie du quartier.</p>
  <h3>Article 9 : Durée</h3>
  <p>Les conseillers de quartier sont tirés au sort pour un mandat de trois ans. Il est procédé tous les trois ans au renouvellement 
    général du Conseil de quartier, selon les modalités définies à l’article 8.</p>
  <p>Aucune personne physique ne peut siéger dans plus d’un Conseil de quartier.</p>
  <p>La fonction de conseiller de quartier suppose une assiduité aux réunions. La parité femmes - hommes sera respectée.</p>
  <h3>Article 10 : Renouvellement en cours de mandat</h3>   
  <p>En cas de démission, de décès ou de carence d’un conseiller, il est procédé à la nomination d’un autre membre en plénière 
    publique par tirage au sort avec les seuls candidats présents ou excusés. La mairie informera tous les candidats n’ayant pas 
    été désignés au premier tirage au sort de cette nouvelle désignation, sa date et son lieu pour que les candidats puissent 
    être présents. </p>    
  <p>La carence est définie par trois absences consécutives non excusées aux séances plénières du Conseil de quartier et aux 
    « réunions des conseillers ».</p>     
  <p>En cas d’épuisement de la liste des candidats en cours de mandat, un nouvel appel à candidatures pourra être lancé à la demande 
    de l’adjoint du Maire en charge de la démocratie locale.</p> 
  <h2>III. Fonctionnement interne</h2>
  <h3>Article 11 : Comité d’animation</h3>
  <p>Un « comité d’animation » de dix personnes est tiré au sort parmi les conseillers, sur candidature, lors de la première plénière. 
    La parité devra être respectée, sauf impossibilité.</p>
  <p>Le rôle du comité d’animation consiste à :
    <ul>
      <li>Animer la vie du Conseil de quartier</li>
      <li>Établir l’agenda annuel des réunions des conseillers et des plénières</li>
      <li>Animer les « réunions des conseillers » et les plénières. L’animation devra se faire collectivement et à tour de rôle des 
        membres du comité d’animation</li>
      <li>Gérer à tour de rôle le secrétariat de séance des membres du comité d’animation</li>
      <li>Être un lien permanent avec les Coordinateurs des Conseils de quartier (CCQ)</li>
    </ul>
  </p>
  <h3>Article 12 : Réunion des conseillers</h3>
  <p>Une « réunion des conseillers » invitant les 60 personnes tirées au sort doit précéder une plénière de 15 jours au moins. 
    Cette « réunion des conseillers » est chargée d’établir l’ordre du jour et la préparation de la réunion plénière suivante. 
    Celui-ci doit parvenir aux Coordinateurs des Conseils de quartier et à l’élu référent du quartier au 4 moins 10 jours avant 
    la plénière, accompagné du texte du vœu proposé au vote s’il y a lieu.</p>          
  <p>Le comité d’animation peut décider d’élargir les réunions de préparation aux personnes compétentes du quartier dont il 
    souhaite s'entourer.</p>
  <p>Tout membre du Conseil de quartier peut proposer d’inscrire un ou plusieurs sujets à l’ordre du jour. Celui-ci doit inclure un 
    temps de parole pour les habitants.</p>
  <p>Le Maire d’arrondissement peut demander l’inscription d’un sujet, pour avis ou pour information du Conseil de quartier.</p>
  <p>Les 60 conseillers de quartier peuvent être convoqués en réunion exceptionnelle à la demande du Maire d’arrondissement.</p>
  <h3>Article 13 : Modalités de vote</h3>
  <p>Les dépenses de fonctionnement du Conseil font l’objet d’un vote à la majorité simple des présents en « réunion des conseillers ».</p>
  <p>Tout vote des Conseils de quartier sur les vœux ou sur les dépenses d’investissement, requiert la présence en séance plénière d’un 
    quorum minimum du tiers des conseillers, soit 20 membres.</p>
  <p>Lors des plénières, un vote consultatif pour recueillir l’avis du public peut être institué. Toutefois le public n’a pas de droit de vote formel, 
    celui-ci est réservé aux conseillers de quartier.</p>
  <h3>Article 14 : Référents thématiques</h3> 
  <p>Chaque Conseil doit disposer au minimum de 6 conseillers référents tirés au sort parmi les volontaires. Ils seront des 
    relais d’information et apporteront leur réflexion et leurs propositions, et/ou organiseront des événements ou des actions 
    de sensibilisation/communication sur ces sujets. </p>
  <p>Ils sont chargés de travailler particulièrement sur les thèmes suivants :
    <ol>
      <li>Propreté, afin de travailler en relation avec l’élu en charge et les services pour établir une cartographie des problèmes chroniques dans le 
        quartier. Il proposera des interventions et sensibilisera la population à ce sujet.</li>
      <li>Budget participatif, afin d’impulser des projets et suivre leur mise en œuvre.</li>
      <li>Handicap, afin de travailler en relation avec le Comité Local du Handicap (CLH). </li>
      <li>Climat, afin de travailler en lien avec les élus en charge de cette thématique, pour amorcer dans le quartier 
        la mise en place du plan climat parisien, pour informer et sensibiliser les habitants, pour organiser des rencontres et 
        des événements.</li>
      <li>Démocratie locale, afin de participer aux travaux de l'Observatoire de la démocratie participative du 14ème arrondissement et à la mise 
        en place de la plateforme-citoyenne.</li>
      <li>JO-2024, afin de travailler en lien avec les adjoints locaux et parisiens du sport pour informer au plus près les 
        habitants sur l’avancée de la mise en place de cet événement international. Il pourra organiser des rencontres avec les 
        sportifs ou les organisateurs. Il contribuera à une meilleure implication des habitants dans cet événement unique du 
        siècle pour construire l’héritage des JO.</li>
    </ol>
  </p>
  <p>Chaque référent pourra organiser son travail en créant une commission. (voir art.19)</p>
  <h3>Article 15 : L’adjoint de quartier</h3> 
  <p>Le Conseil d’arrondissement désigne en début de mandature six adjoints chargés chacun d’un quartier.</p>
  <p>Élu référent, il assiste aux réunions plénières. Il peut également assister, sur invitation des membres du comité d’animation aux « réunions des 
    conseillers » préparatoires aux plénières.</p>
  <p>Son rôle d’adjoint de quartier est de faciliter les échanges d’informations entre la mairie et le comité d’animation. Il est 
    l’interlocuteur premier du Conseil pour obtenir des réponses de la mairie et de ses services aux questions du Conseil ou 
    formulées par des habitants. Il informe le Conseil de quartier des suites données aux vœux adoptés ou non par le Conseil 
    d’arrondissement.</p>
  <h3>Article 16 : Soutien logistique de la mairie</h3>
  <p>La mairie d’arrondissement fournit un soutien logistique aux Conseils de quartier pour leur bon fonctionnement. Elle met 
    à leur disposition les documents administratifs utiles à leur bonne information, des locaux pour se réunir et recevoir du 
    courrier, ainsi que des sessions de formation.</p>
  <p>Les équipements municipaux de proximité et les bailleurs sociaux de la Ville de Paris sont associés à la communication 
    des Conseils de quartier.</p>
  <p>Les membres du Conseil de quartier acceptent les contraintes de la mairie d'arrondissement pour toute demande, notamment en 
    termes de délais.</p>
  <h2>IV. Réunions plénières et commissions thématiques, ouvertes au public</h2>
  <h3>Article 17 : Réunions plénières</h3>
  <p>Le Conseil de quartier se réunit en séance plénière ouverte au public au moins trois fois par an. Seules les questions 
    inscrites à l’ordre du jour et celles ayant un lien géographique avec le quartier ou un intérêt pour celui-ci font l’objet 
    de débats. L’ordre du jour des réunions plénières est établi comme indiqué à l’article 12 par les « réunions de conseillers ».</p>
  <p>Tout habitant, même non membre du Conseil de quartier, ou tout expert même extérieur à l’arrondissement peut participer 
    aux débats, s'exprimer librement et être consulté lors des réunions plénières et au sein des commissions thématiques. 
    Chacun peut aussi demander à être inscrit sur une liste complémentaire pour un futur tirage au sort.</p>
  <p>Tout membre d’un Conseil de quartier s’engage à contribuer à la sérénité des débats et à respecter les principes d’indépendance 
    vis-à-vis des organisations politiques et de non discrimination sociale, ethnique, religieuse ou fondée sur tout autre motif.</p>
  <p>La mairie d'arrondissement s'attache à rendre accessibles les réunions à toutes les personnes en situation de handicap dans la mesure de ses possibilités.</p>
  <h3>Article 18 : Procès verbal</h3> 
  <p>Chaque réunion plénière du Conseil de quartier, ainsi que chaque « réunion des conseillers » font l’objet d’un procès verbal rédigé par le secrétaire de 
    séance choisi dans le comité d’animation, diffusé dans les quinze jours à ses membres ainsi qu’au Maire d’arrondissement.</p>
  <p>Un registre des procès verbaux des réunions est ouvert et tenu à jour, à la mairie d’arrondissement. Ces comptes rendus seront publiés sur le site 
    internet de la mairie.</p>  
  <h3>Article 19 : Commissions thématiques</h3>  
  <p>Le Conseil de quartier peut décider de mettre en place autant de commissions thématiques qu’il le souhaite. Ouvertes à tous 
    les habitants volontaires du quartier elles sont convoquées à la libre initiative d’une ou plusieurs personnes choisies en 
    « réunion de conseillers », qui en seront les animateurs.</p>
  <h3>Article 20 : Communication</h3> 
  <p>Les réunions plénières et les commissions thématiques du Conseil de quartier sont ouvertes au public et doivent être portées à sa connaissance par 
    tous moyens appropriés.</p>
  <h3>Article 21 : Plate-forme citoyenne</h3>
  <p>La mairie mettra à disposition des conseils une plate-forme citoyenne sur le site de la mairie. Elle permettra une participation de ceux qui 
    ne peuvent assister physiquement aux diverses réunions.</p>
  <p>À la demande des conseils, elle permettra de réaliser des sondages sur des sujets locaux. </p>
  <h3>Article 22 : Présence des élus</h3>
  <p>Le Maire d’arrondissement est entendu sur sa demande en réunion plénière par le Conseil de quartier.</p>
  <p>Le Conseil de quartier peut inviter le Maire ou tout autre élu pour participer aux débats. Une invitation spécifique doit être envoyée conjointement 
    à l’envoi de l’ordre du jour.</p>
  <h2>V. Cadre participatif</h2>
  <h3>Article 23 : Règlement intérieur</h3>
  <p>Chaque Conseil de quartier peut établir son règlement intérieur, qui est soumis pour approbation au Conseil d’arrondissement. Il ne peut être en 
    contradiction avec les articles de cette charte.</p>
  <h3>Article 24 : Rapport de bilan de mandat</h3>
  <p>L’activité du Conseil de quartier est retracée en fin de mandat dans un rapport communiqué au Maire d’arrondissement par 
    le comité d’animation et porté à la connaissance des habitants du quartier en réunion plénière du Conseil de quartier. 
    Ce rapport pourra revêtir diverses formes : fichier, diaporama, vidéo, etc.</p>
  <h3>Article 25 : Observatoire de la démocratie participative du 14e arrondissement</h3>
  <p>Un Observatoire de la démocratie participative du 14ème arrondissement est institué pour une durée équivalente à celle du mandat des Conseils de quartier. 
    Il est composé de treize membres :
    <ul>
      <li>6 membres : 1 référent Démocratie Locale par Conseil de Quartier</li>
      <li>7 personnalités qualifiées désignées par le Maire.</li>
    </ul>
    </p>
  <p>Le Maire d’arrondissement désigne le président.</p>
  <p>L’Observatoire rédige chaque année un rapport, faisant part des principaux acquis et problèmes constatés et proposant des suggestions d’amélioration 
    du fonctionnement 7 des Conseils de quartier, du budget participatif local et de tous sujets concernant la démocratie 
    participative. Ce rapport est remis au Maire d’arrondissement et aux conseillers de quartier qui doivent le communiquer 
    aux membres de leur Conseil.</p>
  <h3>Article 26 : Adoption de la charte</h3>
  <p>La Charte des Conseils de quartier du 14e qui s’applique pour la durée d’un mandat de trois ans, fait l’objet, pour son adoption, 
    d’une délibération du Conseil d’arrondissement.</p>
  <p>L’élu garant de l’application de cette charte des Conseils de quartier est l’adjoint du maire en charge de la démocratie locale. Il est l’interlocuteur 
    de référence à qui s’adresser pour tout problème de dysfonctionnement ou de non-conformité à la charte.</p>
  <h2>ANNEXE DE LA CHARTE</h2>
  <h3>Délimitation des quartiers</h3>
  <ul>
    <li>Le Conseil de quartier « Montparnasse - Raspail » couvre le territoire : 1 à 39 rue du Départ, 68 à 174 boulevard du Montparnasse, 95 à la fin du boulevard de Port-Royal, 2 à 50 rue de la Santé, 2 à 60 boulevard Saint Jacques, 2 à la fin de la rue Froidevaux, côté pair de la rue Jean Zay, Place de Catalogne dans la portion comprise entre la rue Jean Zay et la rue du Commandant Mouchotte, rue du Commandant Mouchotte, limite du 15ème arrondissement et toutes les rues à l’intérieur de cette délimitation.</li>
    <li>Le Conseil de quartier « Pernety » couvre le territoire : limite du 15ème arrondissement, place de Catalogne jusqu’à la rue Jean Zay, côté impair de la rue Jean Zay, 94 à la fin de l’avenue du Maine côté pair, 60 à la fin de la rue d’Alésia côté pair et toutes les rues à l’intérieur de cette délimitation.</li>
    <li>Le Conseil de quartier « Didot – Plaisance - Porte de Vanves » couvre le territoire : 127 à la fin rue d’Alésia, limite du 15ème arrondissement, boulevard Adolphe Pinard, Avenue de la Porte de Châtillon côté pair, 42 à 78 rue des Plantes et toutes les rues à l’intérieur de cette délimitation.</li>
    <li>Le Conseil de quartier « Jean Moulin – Porte d’Orléans » couvre le territoire : boulevard Romain Rolland, rue du Professeur H. Vincent côté pair, rue Emile Faguet côté pair, 86 à 160 rue de la Tombe Issoire, 39 à 85 rue d’Alésia, côté impair de la rue des Plantes (dans sa partie comprise entre la rue d’Alésia et le boulevard Brune) et toutes les rues à l’intérieur de cette délimitation.</li>
    <li>Le Conseil de quartier « Montsouris – Dareau » couvre le territoire : avenue du Docteur Lannelongue, avenue Paul Vaillant Couturier, avenue Pierre de Coubertin côté pair, rue de l’Amiral Mouchez côté pair, 52 à la fin de la rue de la Santé, boulevard Saint Jacques côté impair, 1 à 15 avenue René Coty, 57 à la fin de la rue de la Tombe Issoire, rue Emile Faguet côté impair, rue du Professeur H. Vincent côté impair et toutes les rues à l’intérieur de cette délimitation.</li>
    <li>Le Conseil de quartier « Mouton Duvernet » couvre le territoire : rue Froidevaux côté impair, 91 à la fin de l’avenue du Maine, 16 à 58 rue d’Alésia, 2 à 16 avenue René Coty, 52 à 82 rue de la Tombe-Issoire et toutes les rues à l'intérieur de cette délimitation.</li>
  </ul>

      </main>
      </Layout>
    )
  }