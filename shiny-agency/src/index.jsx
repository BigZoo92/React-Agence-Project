import React from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Survey from './Pages/Survey';
import Header from './Components/Header'
import Error from './Components/Error'
import Results from './Pages/Results'
import Freelances from './Pages/Freelances'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <BrowserRouter>
        <Header />
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route path="/survey/:questionNumber" element={<Survey />}></Route>
                <Route path="/results" element={<Results />}></Route>
                <Route path="/freelances" element={<Freelances />}></Route>
                <Route path='*' element={<Error />}></Route>
            </Routes>
            </BrowserRouter>
    </React.StrictMode>
)