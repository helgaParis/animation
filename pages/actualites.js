//server side props, active calls to db, without layout, would be slow

import { connectToDatabase } from "../util/mongodb";

export default function Actualites({ articles }) {
  return (
	<div>
	  <h1>Les nouvelles du quartier et du conseil du quartier</h1>
	  <ul>
		{articles.map((article) => (
		  <li key={article._id}>
			<h2>{article.title}</h2>
			<h3>{article.text}</h3>
			<p>{article.author}</p>
			<p>{article.date}</p>
		  </li>
		))}
	  </ul>
	</div>
  );
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const articles = await db
	.collection("articles")
	.find({blog:true})
	.sort({ date: -1 })
	.limit(20)
	.toArray();

  return {
	props: {
	  articles: JSON.parse(JSON.stringify(articles)),
	},
  };
}