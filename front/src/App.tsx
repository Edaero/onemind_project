import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/Layout/NotFound";
import Home from "./components/Layout/Home";
import Footer from "./components/Footer/Footer";
import Introduction from "./components/Layout/Introduction";
import News from "./components/Layout/News";
import Album from "./components/Layout/Album";
import Location from "./components/Layout/Location";
import Worship from "./components/Layout/Worship";
import Navbar from "./components/Navbar/Navbar";
import MakePost from "./components/PostComp/MakePost";
import Pastor from "./components/Layout/Pastor";
import ShowPost from "./components/PostComp/ShowPost";
import Signin from "./components/Layout/Signin";


function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<NotFound />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/news" element={<News />} />
        <Route path="/album" element={<Album />} />
        <Route path="/location" element={<Location />} />
        <Route path="/worship" element={<Worship />} />
        <Route path="/makepost" element={<MakePost />} />
        <Route path="/pastor" element={<Pastor />} />
        <Route path="/showpost/:id" element={<ShowPost/>}></Route>
        <Route path="/signin" element={<Signin />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
