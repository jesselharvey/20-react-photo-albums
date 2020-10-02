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
      {albums.map((album) => (
      <div className="sidebarItem">
        <span>{album.title}</span>
      </div>
      ))}
    </div>
  )
}

export default Sidebar
