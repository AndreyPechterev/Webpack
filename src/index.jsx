import * as $ from "jquery";
import Post from "@models/Post";
// import json from './assets/json.json'
import logo from "./assets/webpack-logo";
// import xml from './assets/data.xml'
// import csv from './assets/data.csv'
import "./styles/style.css";
import "./styles/less.less";
import "./styles/sass.scss";
import "./babel";
import React from "react";
import ReactDOM from "react-dom/client";
const post = new Post("Webpack title", logo);
$("pre").addClass("code").html(post.toString());
console.log("Post to string", post.toString());

const App = () => {
    return (
        <div className="container">
            <h1>Andrey</h1>
            <hr />
            <div className="logo"></div>
            <hr />
            <pre></pre>
            <hr />
            <div className="box">
                <h2>less</h2>
            </div>
            <hr />
            <div className="pox">
                <h2>sass</h2>
            </div>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
