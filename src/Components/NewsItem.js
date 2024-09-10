import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let { title, description, url } = this.props;
    return (
      <div>
            <div className="card" style={{width: "18rem"}}>
                <img src={url} className="card-img-top" alt="..." style={{width: "285px", height: "186px"}}/> 
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
      </div>
    )
  }
}