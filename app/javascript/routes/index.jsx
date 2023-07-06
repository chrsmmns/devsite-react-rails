import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Posts from "../components/Posts";
import Post from "../components/Post";



export default (
   <Router>
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/posts" element={<Posts />} />
         <Route path="/post/:id" element={<Post />} />
      </Routes>
   </Router>
)