import { useEffect, useState } from "react";
import "./App.css";
import Newscards from "./components/newsboard";
import Load from "./components/spinner";

function App({category}) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=fa339eba061f413296e371843ef8fc89`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setArticles(data.articles);
        setLoading(false);
      });
  }, [category]);

  return (
    <div className="app">
      {/* <h1 style={{textAlign:"center"}}>News App</h1> */}

      {loading && <Load/>}

      {articles.map((news, index) => {
        return <Newscards key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}  />
      })}

    </div>
  );
}

export default App;
