import React, { useState, useEffect } from "react";
import axios from "axios";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = () => {
      axios
        .get(
          "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f0d3f6fb0ef345cab3d1bedbb867fc0b"
        )
        .then((response) => {
          setNews(response.data.articles.slice(0, 5)); // retrieve only the top 5 articles
        })
        .catch((error) => {
          console.log(error);
        });
    };

    // Fetch news on component mount
    fetchNews();

    // Fetch news every 60 seconds
    const intervalId = setInterval(fetchNews, 60000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h2>Top 5 Business News</h2>
      <ul>
        {news.map((article) => (
          <li key={article.url}>
            <a href={article.url}>{article.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;