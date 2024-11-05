import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, source, time, author } = props;
    return (
            <div className="card" style={{width: "18rem"}}>             
                <img src={imageUrl} className="card-img-top" alt="..." style={{width: "285px", height: "186px"}}/> 
                <div className="card-body">
                    <p className="card-text text-danger">{source}</p>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href="#" className="btn btn-primary">Read More</a>
                    <p className="card-text"><small className="text-muted">By {author} on {new Date(time).toGMTString()}</small></p>
                </div>
            </div>
    )
}

export default NewsItem
