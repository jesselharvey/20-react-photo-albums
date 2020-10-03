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

  const [zoomedImage, setZoomedImage] = useState(null)

  useEffect(() => {
    axios.get(`http://localhost:3000/albums/${id}`).then((resp) => {
      // console.log(resp.data)
      let album = resp.data
      setAlbum(album)
      let albumData = resp.data.subAlbum
      setAlbumContent(albumData)
    })
  }, [id])
  console.log(zoomedImage)

  return (
    <div>
    {zoomedImage ? (
    <div className="modal" onClick={() => setZoomedImage(null)}>
      <h3>{zoomedImage.name}</h3>
      <img className="zoomedImg" src={zoomedImage.picture} />
    </div>
    ) : null}

      <h1>{album.title}</h1>
      <div className="albumContainer" >
        
        <Sidebar />
      <div className="multiImageContainer">
        {albumContent.map((item) => (
          <div className="singleImageContainer">
          <img className="image" src={item.picture} onClick={() => setZoomedImage(item)}/>
          <span>{item.name}</span>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Album
