import React from 'react'
import "./Upload.scss"

const Upload = () => {
    return (
        <div className="upload">
            <img src="https://placeimg.com/640/480/any" alt="preview" className="preview" />
            <input type="file" />
        </div>
    )
}

export default Upload
