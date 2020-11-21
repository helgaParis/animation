# React / Next App for local (French) city institution

(Conseil du Quartier Jeam Moulin Porte d'Orléans, Paris 14e)

Website: <https:conseil-jmpo.fr>
Framework: Nextjs
Database: Mongodb
Hosting: Vercel + Mongo Atlas

## Project description

This project was initiated to improve the communication of the committee, originally intended to have a few pages online and to add a blog. I chose Next to compare it with a pure React project I had worked on before.
After the first months of lockdown, the project grew to about 50 pages on publication day (6/10/20) and still waiting for the content of 2 busy commissions.

## Hosting

The first version was hosted on a VPS and a MongoDB standalone instance on another VPS, source control via Github as well and a small Express server.
As the project grew, I moved the App onto a Vercel account and the database to Mongo Atlas, to disentangle it from my private servers, to allow a future team of counsellors to choose another webmaster.
Vercel allows serverless Node functions to be executed, with a slightly different approach than I used on the first express server. 
The blog is now live with content coming from Mongodb Atlas, the forms allowing the counsellors  to add data to Mongo Atlas will go live end of the year 2020. To enable the public to add content is still under discussion for legal and moderation reasons.

## Code

It started with a standard npx create-next-app.
I have a preference of functions over classes, so when a React or Next manual document still indicates a solution with classes, I found the hook solution.
I tried to apply accessibility and best practice norms to all pages and the head elements will have distinct SEO elements soon.

## Credits

Frederic wrote an animation for the chapter Climat before the app moved to a new repository and he put content on several pages via the Dev branch.
Texts and contribution to design and architecture: Zeliha Chaffin
Code, architecture and db: Helga Petrovic
