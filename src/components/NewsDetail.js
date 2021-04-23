import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import parser from "html-react-parser";

const NewsDetail = () => {
    const {newsId} = useParams()
    const [news,setNews] = useState({})

    useEffect(()=>{
        axios.get(`https://nurkadyrnur.pythonanywhere.com/news/${newsId}/`).then((res)=>{
            setNews(res.data)
        })
    },[])

    return (
        <div>
            <h1>{news.title}</h1>
            <img src={`https://nurkadyrnur.pythonanywhere.com${news.image_detail}`} alt=""/>
            <p className="card-text">{parser(news.body||"")}</p>
        </div>
    );
};

export default NewsDetail;