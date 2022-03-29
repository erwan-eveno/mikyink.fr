import React from 'react';
import {render} from 'react-dom';
import './index.scss';
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Showmore from "./Showmore";
import Mentions from "./components/Mention";

const rootElement = document.getElementById("root");

render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path='/showmore' element={<Showmore />} />
            <Route path='/mentions-legales' element={<Mentions />} />
        </Routes>
    </BrowserRouter>,
    rootElement
)
