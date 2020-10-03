import React, { useState, useEffect } from 'react';
import axios from "axios"
import {BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./AlbumHome.css"

function AlbumHome() {
  const [albums, setAlbums] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3000/albums").then((resp) => {
      // console.log(resp.data)
      let albumsData = resp.data
      setAlbums(albumsData)
    })
  }, [])
  // console.log(albums)
  return (
    <div>
      <h1>Albums</h1>
      <div id="albumContainer">
        {albums.map(album => 
        <div className="album">
          <Link to={`/albums/${album.id}`}> <img className="homeThumbnail" src={album.thumbnail} /></Link>
          <Link to={`/albums/${album.id}`}><span>{album.title}</span></Link>
          </div> )}
        {/* <img src={album.thumbnail}></img> */}
        {/* <span>{albums.title}</span> */}
      </div>
    </div>
  )
}

export default AlbumHome