import { useEffect, useState } from 'react'
import './App.css'
import TmdbReq from './TmdbReq'

function App() {
  const [movieList, setMovieList] = useState([])
  
  useEffect(() => {
    const loadAll = async () => {
      let list = await TmdbReq.getHomeList()
      setMovieList(list)
    }
    loadAll()
  }, [])
console.log(movieList)
  return (
    <div className="App">
      
    </div>
  )
}

export default App
