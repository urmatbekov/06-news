import React from 'react';
import parser from "html-react-parser";
import { Link } from 'react-router-dom';

const NewsItem = (props) => {
    const item = props.item
    return (
        <div className="card news-item">
            <div className="card-header">
                <p>{item.type}</p>
            </div>
            <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <img src={`https://nurkadyrnur.pythonanywhere.com${item.image_detail}`} alt=""/>
                <p className="card-text">{parser(item.short_body||"")}</p>
                <Link to={`/news/${item.id}`} className="btn btn-primary">
                    Detail
                </Link>
            </div>
        </div>
    );
};

export default NewsItem;