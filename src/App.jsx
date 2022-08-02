import { useEffect, useState } from 'react'
import { FeaturedMovie } from './components/MovieRow/FeaturedMovie/FeaturedMovie';
import MovieRow from './components/MovieRow/MovieRow'
import {getHomeList} from './TmdbReq'

export default function App() {
  const [movieList, setMovieList] = useState([])
  const [fetchData, setFetchData] = useState([])

  useEffect(() => {
    // Pegando a Lista de Filmes
    const loadAll = async () => {
      let list = await getHomeList()
      setMovieList(list)
    }
    loadAll()

    // Pegando o Filme Destaque


  }, []);

  return (
    <div className="page">
      <section className="feature">
        <FeaturedMovie />
      </section>
      <section className="lists">
          {movieList.map((item, key) => 
            <MovieRow title={item.title} items={item.items} key={key}/>
          )}
      </section>
    </div>
  )
}