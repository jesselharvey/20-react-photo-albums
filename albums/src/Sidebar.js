import React, { useState, useEffect } from "react"
import axios from "axios"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom"
import "./Sidebar.css"

function Sidebar() {
  const [albums, setAlbums] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3000/albums").then((resp) => {
      // console.log(resp.data)
      let albumsData = resp.data
      setAlbums(albumsData)
    })
  }, [])
  console.log(albums)
  return (
      
      <div id="sidebar">
        <Link to={"/"}><span>Album Home</span></Link>
        {albums.map((album) => (
        <div className="sidebarItem">
         <Link to={`/albums/${album.id}`}><span>{album.title}</span></Link> 
        </div>
        ))}
      </div>
  )
}

export default Sidebar
