# React / Next App for local (French) city institution

(Conseil du Quartier Jeam Moulin Porte d'Orléans, Paris 14e)

Website: <https:conseil-jmpo.fr>
Framework: Nextjs
Database: Mongodb
Hosting: Vercel + Mongo Atlas

## Project description

This project was initiated to improve the communication of the comittee, originally intended to have a few pages online and to add a blog. I chose Next to compare it with a pure React project I had worked on before.
After the first months of lockdown, the project grew to about 50 pages on publication day (6/10/20) and still waiting for the content of 2 busy commissions.

## Hosting

The first version was hosted on a VPS and a MongoDB standalone instance on another VPS, source control via Github as well and a small Express server.
As the project grew, I moved the App onto a Vercel account and the database to Mongo Atlas, to distangle it from my private servers, to allow a future team of counsellors to choose another webmaster.
Vercel allows serverless Node functions to be executed, with a slightly different approach than I used on the first express server. The forms and connections to Mongo Atlas will go live end of the year 2020.

## Code

It started with a standard npx create-next-app.
I have a preference of functions over classes, so when a React or Next manual document still indicates a solution with classes, I found the hook solution.
I tried to apply accesibility and best practice norms to all pages and the head elements will have distinct SEO elements soon.
One element is not resolved at the moment, the html element has no lang tag. This worked fine on Next 9.5.2 but broke on 9.5.3 in September 2020. Not working on 9.5.4 either. I will change it here as soon as it can be fixed. As the website is French, it's a bother. (/pages/_documents.js - the error stemms from being obliged to import Html from Next documents )


## Credits

Frederic wrote an animation for the chapter Climat before the app moved to a new repository and he put content on several pages via the Dev branch.
Texts and contribution to design and architecture: Zeliha Chaffin
Code, architecture and db: Helga Petrovic
