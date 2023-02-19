import React from 'react'
import { createRoot } from 'react-dom/client';
import Home from './Pages/Home/Home';
import Survey from './Pages/Survey';
import { BrowserRouter , Routes, Route } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route path="/survey" element={<Survey />}></Route>
            </Routes>
            </BrowserRouter>
    </React.StrictMode>
)