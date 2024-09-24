import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";

function BlogDetails() {
    const { id } = useParams();
    const { blogs } = useContext(BlogContext);

    const blog = blogs.find((b) => b.id === Number(id));

    if (!blog) {
        return <div>Blog Not Found...</div>;
    }
    return (
        <div className="blog-container">
            <div className="details">
                <h2>{blog.title}</h2>
                <p>{blog.body}</p>
            </div>
        </div>
    );
}

export default BlogDetails;
