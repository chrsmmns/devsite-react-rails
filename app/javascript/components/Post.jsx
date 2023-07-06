import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Post = () => {
   const params = useParams();
   const navigate = useNavigate();
   const [post, setPost] = useState({ content: "" });

   useEffect(() => {
      const url = `/api/v1/posts/${params.id}`;
      fetch(url)
         .then((res) => {
            if (res.ok) {
               return res.json();
            }
            throw new error("Network response was not ok.")
         })
         .then((res) => setPost(res))
         .catch(() => navigate("/posts"));
   }, [params.id]);

   const addHtmlEntities = (str) => {
      return String(str).replace(/&lt;/g, "<").replace(/&gt;/g, ">");
   }

   const postContent = addHtmlEntities(post.content);

   return (
      <div className="">
         <div className="hero position-relative d-flex align-items-center justify-content-center">
            <img
               src={post.image}
               alt={`${post.name} image`}
               className="img-fluid position-absolute"
            />
            <div className="overlay bg-dark position-absolute" />
            <h1 className="display-4 position-relative text-white">
               {post.title}
            </h1>
         </div>
         <div className="container py-5">
            <div className="row">
               <div className="col-sm-12 col-lg-3">
                  <h5>Left sidebar</h5>
               </div>
               <div className="col-sm-12 col-lg-7">
                  <h5 className="mb-2">Preparation Instructions</h5>
                  <div
                     dangerouslySetInnerHTML={{
                        __html: `${postContent}`,
                     }}
                  />
               </div>
               <div className="col-sm-12 col-lg-2">
                  <button
                     type="button"
                     className="btn btn-danger"
                  >
                     Delete Post
                  </button>
               </div>
            </div>
            <Link to="/posts" className="btn btn-link">
               Back to posts
            </Link>
         </div>
      </div>
   );


};

export default Post;