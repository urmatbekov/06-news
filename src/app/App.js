import React,{useState} from 'react';
import NewsItem from "./NewsItem"

const initialState = [
    {
        id: 1,
        title: "Hello news",
        short_body: "La la hla zla",
        type: "Sport"
    },
    {
        id: 3,
        title: "Hi news",
        short_body: "La la hla zla",
        type: "Games"
    },
    {
        id: 6,
        title: "Hello Zero",
        short_body: "La la hla zla",
        type: "All"
    },
    {
        id: 7,
        title: "Hi zero",
        short_body: "La la hla zla",
        type: "Politic"
    },
]

const App = () => {

    const [news, setNews] = useState(initialState)

    return (
        <div>
            <div className="container border shadow-sm">
                <h1 className="text-center">Hello news</h1>
                <div className="row mb-5">
                    {news.map((item) => (
                        <div key={item.id} className="col-6 mt-4">
                            <NewsItem item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default App;