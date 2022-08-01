import { useEffect, useState } from 'react'
import MovieRow from './components/MovieRow/MovieRow'
import {getHomeList} from './TmdbReq'

export default function App() {
  const [movieList, setMovieList] = useState([])
  
  useEffect(() => {
    const loadAll = async () => {
      let list = await getHomeList()
      setMovieList(list)
    }
    loadAll()
  }, []);

  return (
    <div className="page">
      <section className="lists">
          {movieList.map((item, key) => 
            <MovieRow title={item.title} items={item.items} key={key}/>
          )}
      </section>
    </div>
  )
}