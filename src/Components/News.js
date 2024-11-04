import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from 'react-infinite-scroll-component';
import InfinitySpinComponent from './InfinitySpinComponent';


const News = (props) => {   

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [category, setCategory] = useState('general');  

    const ChangeArticlesFunction = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        return parsedData;        
    }

    useEffect(() => {
        async function ChangeArticlesFunction() {
            
            let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pagesize=${props.pageSize}`;
            let data = await fetch(url);
            let parsedData = await data.json();
            setPage(page + 1);
            setCategory(props.category);  
            setArticles(parsedData.articles);
            setTotalResults(parsedData.totalResults);
        }
        
        props.setProgress(20);            
        setTimeout(() => {
            props.setProgress(40);          
            props.setProgress(60);                            
            ChangeArticlesFunction();
            props.setProgress(100);
        }, 500);        
    }, []);      

    const fetchMoreData = async () => {
        setPage(page + 1);
        let parsedData = await ChangeArticlesFunction();
        setTimeout(() => {                        
            setArticles(articles.concat(parsedData.articles));
            setTotalResults(parsedData.totalResults);
        }, 1500);        
    }

    return (
      <>
            <h3 className="text-center" style={{marginTop: "90px"}}>This is News Component.</h3>        
            <div className="row mt-5">

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={true}
                loader={articles.length != totalResults ? <InfinitySpinComponent />  : ""
            }>
                
                <div className='container'>
                    <div className='row'>
                        {articles.map((element, index) => {
                            return <div className="col-md-4 mt-3" key={index}>
                                        <NewsItem title={(element.title)  ? element.title.slice(0, 45) : ""} description={(element.description) ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} url={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name}/>                
                                    </div>
                        })}      
                    </div>
                </div>
            </InfiniteScroll>
                            
            </div>
      </>
    )  
}

export default News
