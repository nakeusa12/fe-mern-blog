import React from 'react'
import "./index.scss"
import { Button } from "../../atoms"
import { useHistory } from "react-router-dom"

const BlogItem = () => {
    const history = useHistory();
    return (
        <div className="blog-item">
            <img className="image-thumb" src="https://placeimg.com/640/480/any" alt="post" />
            <div className="content-detail">
                <p className="title">Title Blog</p>
                <p className="author">Author - Date Post</p>
                <p className="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam aliquam fugit molestias numquam unde harum eum, deleniti dignissimos ad ex omnis obcaecati minima aliquid praesentium sed minus, blanditiis nihil illum.</p>
                <Button title="View Detail" onClick={() => history.push("/detail")} />
            </div>
        </div>
    )
}

export default BlogItem
