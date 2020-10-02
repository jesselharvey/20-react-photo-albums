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

function Album() {
  const { id } = useParams

  const [album, setAlbum] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:3000/albums/${id}`).then((resp) => {
      // console.log(resp.data)
      let albumData = resp.data.subAlbum
      setAlbum(albumData)
      // console.log(album)
    })
  }, [])
  return (
    <div>
      {/* {album.map((item) => (
        <img src={item.picture} />
      ))} */}
    </div>
  )
}

export default Album
