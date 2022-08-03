import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import React, { useState } from 'react';


import './styles/app.css';
import './bootstrap';

import Layout from './components/Layout';
import Home from './pages/Home';
import Notifications from "./pages/Notifications";
import Messages from "./pages/Messages";
import Profil from "./pages/Profil";
import Parametres from "./pages/parametres";
import Admin from "./pages/Admin";
import DetailPost from "./pages/DetailPost";
import Compte from "./pages/Parametres/Compte";
import Affichage from "./pages/Parametres/Affichage";
import More from "./pages/Parametres/More";


import { dataPosts } from "./components/data/post";
import { dataUser } from "./components/data/user";
import { dataNotifs } from "./components/data/notif";
import About from "./pages/Parametres/More/About";
import Usage from "./pages/Parametres/More/Usage";
import Cookies from "./pages/Parametres/More/Cookies";

function App() {

    return (
        <Routes>
            <Route path="/" element={<Layout miniUser={dataUser} />}>
                <Route path="/" element={<Home posts={dataPosts} />} />
                <Route path="/post/:id" element={<DetailPost posts={dataPosts} />} />
                <Route path="/notifications" element={<Notifications notifs={dataNotifs} />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/profil" element={<Profil user={dataUser} posts={dataPosts} />} />
                <Route path="/parametres" element={<Parametres />}>
                    <Route path="compte" element={<Compte />} />
                    <Route path="affichage" element={<Affichage />} />
                    <Route path="more" element={<More />} />
                </Route>
                <Route path="/admin" element={<Admin />} />
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="/usage" element={<Usage />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/login" element={<Login />} />
        </Routes>

    );
}

export default App;