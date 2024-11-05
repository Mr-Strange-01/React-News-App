import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import ColorSpinner from './ColorSpinner';

const News = (props) => {    

    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0); 

    const apiCall = async (page) => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=4395afbf095c44b593327e6c5b177fdf&pageSize=5&page=${page}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        return parsedData;
    }

    const componentDidMount = async () => {
        setProgress(10);
        var page = this.state.page;
        let data = await this.apiCall(page);
        setProgress(70);

        setArticles(data.articles);
        setTotalResults(data.totalResults);
        setProgress(100);           
    }

    const fetchMoreData = async () => {
        var page = this.state.page + 1;
        var data = await this.apiCall(page);
        
        setArticles(articles.concat(data.articles));
        setTotalResults(data.totalResults);
        setPage(page);
    }
    return (
      <div>
            <h3 className="text-center">This is News Component.</h3>
            <InfiniteScroll
                dataLength={this.state.articles.length}
                next={this.fetchMoreData}
                hasMore={true}
                loader={(this.state.articles.length !== this.state.totalResults) ? <ColorSpinner />  : ''}
            >       

                <div className="container">
                    <div className="row">
                        {this.state.articles.map((element, index) => {
                            return <div className="col-md-4 mt-3" key={index}>
                                        <NewsItem title={(element.title) ? element.title.slice(0, 45) : ""} description=    {(element.description) ? element.description.slice(0, 88) : ""} imageUrl={(element.urlToImage) ? element.urlToImage : ""} source={(element.source.name) ? element.source.name : ""} author={(element.author) ? element.author : "Unknown"} time={element.publishedAt} />                
                                    </div>   
                        })}  
                    </div>    
                </div> 
                    
                            
            </InfiniteScroll>            
      </div>
    )
}


News.defaultProps = {
    country : "us",
    category : "general",
    pageSize : 8
}

News.propTypes = {
    country : PropTypes.string,
    category : PropTypes.string,
    pageSize : PropTypes.number
}

export default News
