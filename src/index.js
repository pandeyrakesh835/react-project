import react from "react";
import reactDom from "react-dom";
import './App.jsx';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import App from "./App.jsx";

reactDom.render(
    <>
<BrowserRouter>
<App/>
</BrowserRouter>
</>,

document.getElementById('root')
    );