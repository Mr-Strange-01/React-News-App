import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'

export default class News extends Component {

    static defaultProps = {
        country : "us",
        category : "general",
        pageSize : 8
    }

    static propTypes = {
        country : PropTypes.string,
        category : PropTypes.string,
        pageSize : PropTypes.number
    }

    articles = [];
    constructor () {
        super();
        this.state = {
            articles : this.articles,
            loading : false,
            page : 1
        }
    }

    async apiCall (page) {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=4395afbf095c44b593327e6c5b177fdf&page=${page}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles : parsedData.articles,
            page : page,
            totalResult: parsedData.totalResults
        });
    }

    async componentDidMount () {
        var page = this.state.page;
        this.apiCall(page);
    }

    handleNextClick = async () => {
        var page = this.state.page + 1;
        this.apiCall(page);
    }

    handlePrevClick = async () => {    
        var page = this.state.page - 1;
        this.apiCall(page);
    }
  render() {
    return (
      <div>
            <h3 className="text-center">This is News Component.</h3>
            <div className="row mt-5">
                {this.state.articles.map((element) => {
                    return <div className="col-md-4 mt-3" key={element.url}>
                                <NewsItem title={(element.title) ? element.title.slice(0, 45) : ""} description=    {(element.description) ? element.description.slice(0, 88) : ""} imageUrl={(element.urlToImage) ? element.urlToImage : ""} source={(element.source.name) ? element.source.name : ""} author={(element.author) ? element.author : "Unknown"} time={element.publishedAt} />                
                            </div>   
                })}              
            </div>

            <div className="container d-flex justify-content-between mt-4">
                <button className="btn btn-info text-white" disabled={this.state.page <= 1} onClick={this.handlePrevClick}> &larr; Previous</button>
                <button className="btn btn-info text-white" disabled={this.state.page + 1 > Math.ceil(this.state.totalResult / 20)} onClick={this.handleNextClick}>Next &rarr;</button>
            </div>
      </div>
    )
  }
}
