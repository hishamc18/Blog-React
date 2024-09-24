import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";

function CreateBlog() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const { addBlog } = useContext(BlogContext);
    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        navigate("blogs");
        addBlog(title, body);
    };

    return (
        <div>
            <div className="h1">
                <h1>Create a Blog</h1>
            </div>
            <div>
                <form onSubmit={handlesubmit}>
                    <label>Title: </label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter an eye-catching title…"
                    />
                    <label>Body: </label>
                    <textarea
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        placeholder="Express your thoughts here... Share your ideas, stories, or insights. Unleash your creativity!"
                    ></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default CreateBlog;
