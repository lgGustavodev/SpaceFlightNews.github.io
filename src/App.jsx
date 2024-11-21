import React, { useEffect, useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

import { Navbar } from "./components/NavBar/Navbar";
import { Article } from "./components/Article/Article";
import "./styles/app.css";
// import article1img from "./assets/image/article 1.jpg";
// import article2img from "./assets/image/article2.avif";
// import article3img from "./assets/image/article3.webp";

// import { Counter } from "./components/Counter/Counter";

//Componente em classe é uma classe que herda a classe component do react,
// e retorna HTML dentro do método render.
function App() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        async function loadNews() {
            const response = await axios.get(
                "https://api.spaceflightnewsapi.net/v4/articles/?limit=10&offset=10"
            );
            const newsData = response.data;
            console.log(newsData);
            console.log(newsData.results);
            setNews(newsData.results);
        }

        loadNews();
    }, []);

    return (
        <>
            <Navbar />

            <section id="articles">
                {news.length === 0 ? (
                    <div
                        style={{
                            height: "400",
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <ThreeDots
                            height="80"
                            width="80"
                            radius="9"
                            color="white"
                            ariaLabel="loading"
                        />
                    </div>
                ) : (
                    news.map((article) => {
                        return (
                            <Article
                                key={article.id}
                                title={article.title}
                                provider={article.news_site}
                                description={article.summary}
                                thumbnail={article.image_url}
                            />
                        );
                    })
                )}
            </section>
        </>
    );
}

export default App;
