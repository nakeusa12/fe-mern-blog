import React from 'react'
import { Link } from '../../Components/atoms'
import "./DetailBlog.scss"
import { useHistory } from "react-router-dom"


export const DetailBlog = () => {
    const history = useHistory();

    return (
        <div className="detail-blog-wrapper">
            <img className="img-cover" src="https://placeimg.com/640/480/any" alt="thumb" />
            <p className="blog-title">Title Blog</p>
            <p className="blog-author">Author - Data Post</p>
            <p className="blog-body">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore quaerat, repudiandae accusantium incidunt nostrum optio exercitationem vitae blanditiis distinctio ab ipsa illum vero atque cum nesciunt voluptatibus eum enim. Velit.</p>
            <Link title="Kembali ke Home" onClick={() => history.push("/")} />
        </div>
    )
}
