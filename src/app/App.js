import React, { useState, useEffect } from 'react';
import NewsItem from "./NewsItem"
import axios from "axios";
import Navbar from "../components/Navbar"
import { Route } from "react-router-dom"
import About from '../components/About';
import Contacts from "../components/Contacts"
import NewsDetail from "../components/NewsDetail"
import { connect } from 'react-redux';
import {addNews} from '../actions/news';


const App = ({news,addNews}) => {

    useEffect(() => {
        axios.get("https://nurkadyrnur.pythonanywhere.com/news/").then((res) => {
            addNews(res.data);
        })
    }, [])

    return (
        <div>
            <Navbar />
            <div className="container border shadow-sm">
                <Route path="/" exact>
                    <h1 className="text-center">Hello news</h1>
                    <div className="row mb-5">
                        {news.results.map((item) => (
                            <div key={item.id} className="col-6 mt-4">
                                <NewsItem item={item} />
                            </div>
                        ))}
                    </div>
                </Route>
                <Route path="/about" exact>
                    <About/>
                </Route>
                <Route path="/contacts">
                    <Contacts/>
                </Route>
                <Route path="/news/:newsId">
                    <NewsDetail/>
                </Route>
            </div>
        </div>
    );
};

const msp = ({news}) => {
    return {news}
}

export default connect(msp,{addNews})(App);