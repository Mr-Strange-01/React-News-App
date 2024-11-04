import React from 'react'

const NewsItem = (props) => {
  let { title, description, imageUrl, url, author, publishedAt, source } = props;
  return (
    <div className="card" style={{width: "18rem"}}>
        <img src={imageUrl} className="card-img-top" alt="..." style={{width: "285px", height: "186px"}}/> 
        <div className="card-body">
            <h6 className="card-subtitle mb-2 text-muted">{source}</h6>
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(publishedAt).toGMTString()}</small></p>
            <a href={url} target="_blank" rel="noreferrer" className="btn btn-primary">Read More</a>
        </div>
    </div>          
  )  
}

export default NewsItem