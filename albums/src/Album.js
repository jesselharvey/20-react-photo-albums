import React, { useState, useEffect } from "react"
import axios from "axios"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom"
import "./Album.css"
import Sidebar from "./Sidebar.js"

function Album() {
  const { id } = useParams()


  const [album, setAlbum] = useState([])
  const [albumContent, setAlbumContent] = useState([])

  const [imageZoom, setImageZoom] = useState(false)

  let handleClick = () => {
    setImageZoom(true)
  }

  useEffect(() => {
    axios.get(`http://localhost:3000/albums/${id}`).then((resp) => {
      // console.log(resp.data)
      let album = resp.data
      setAlbum(album)
      let albumData = resp.data.subAlbum
      setAlbumContent(albumData)
    })
  }, [id])
  console.log(album)
  return (
    <div>
      <h1>{album.title }</h1>
      <div className="albumContainer" >
        <Sidebar />
      <div className="multiImageContainer">
        {albumContent.map((item) => (
          <div className={(imageZoom ? "zoomedImgContainer" : "singleImageContainer")}>
          <img className={(imageZoom ? "zoomedImg" : "image")} src={item.picture} onClick={handleClick}/>
          <span>{item.name}</span>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Album
