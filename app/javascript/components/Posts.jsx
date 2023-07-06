import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Posts = () => {
   const navigate = useNavigate();
   const [posts, setPosts] = useState([]);

   useEffect(() => {
      const url = "/api/v1/posts";
      fetch(url)
         .then((res) => {
            if (res.ok) {
               return res.json();
            }
            throw new error("Network response was not ok.")
         })
         .then((res) => setPosts(res))
         .catch(() => navigate("/"));
   }, []);

   const allPosts = posts.map((post, index) => (
      <div key={index} className="col-md-6 col-lg-4">
         <div className="card mb-4">
            <img src={post.image}
            className="card-img-top"
            alt={`${post.title} image`}
            />
            <div className="card-body">
               <h5 className="card-title">{post.title}</h5>
               <Link to={`/post/${post.id}`} className="btn custom-button">Read Post</Link>
            </div>
         </div>
      </div>
   ));

   const noPost = (
      <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
         <h4>
            No posts yet. 
         </h4>
      </div>
   );

   return (
      <>
         <section className="jumbotron jumbotron-fluid text-center">
            <div className="container py-5">
               <h1 className="display-4">
                  Posts for your reading displeasure
               </h1>
               <p className="lead text-muted">
                  Here are my aboslute worst posts I've ever conceived. Hope you enjoy!
               </p>
            </div>
         </section>
         <div className="py-5">
            <main className="container">
               <div className="text-end mb-3">
                  <Link to="/post" className="btn custom-button">Write New Post</Link>
               </div>
               <div className="row">
                  {posts.length > 0 ? allPosts : noPost}
               </div>
               <Link to="/" className="btn btn-link">Home</Link>
            </main>
         </div>
      </>
   )

};

export default Posts;