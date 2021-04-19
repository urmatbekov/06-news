import React from 'react';

const NewsItem = (props) => {
    const item = props.item
    return (
        <div className="card">
            <div className="card-header">
                <p>{item.type}</p>
            </div>
            <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p className="card-text">{item.short_body}</p>
                <a href="#" className="btn btn-button">
                    Detail
                </a>
            </div>
        </div>
    );
};

export default NewsItem;