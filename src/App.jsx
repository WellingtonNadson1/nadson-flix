import { useEffect, useState } from 'react'
import { FeaturedMovie } from './components/FeaturedMovie';
import MovieRow from './components/MovieRow'
import {getHomeList, getInfoMovie} from './TmdbReq'
import './App.css'
import { Header } from './components/Header';

export default function App() {
  const [movieList, setMovieList] = useState([])
  const [fetchData, setFetchData] = useState(null)

  useEffect(() => {
    // Pegando a Lista de Filmes
    const loadAll = async () => {
      let list = await getHomeList()
      setMovieList(list)

      // Pegando o Filme Destaque
      let originals = list.filter(item => item.slug === 'originals')
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1))
      let chosen = originals[0].items.results[randomChosen]
      
      let chosenInfoMovie = await getInfoMovie(chosen.id, 'tv')
      setFetchData(chosenInfoMovie)
    }
    
    loadAll()



  }, []);

  return (
    <div className="page">

      <Header />
      
      {fetchData && 
        <FeaturedMovie item={fetchData}/>
      }

      <section className="lists">
          {movieList.map((item, key) => 
            <MovieRow title={item.title} items={item.items} key={key}/>
          )}
      </section>
    </div>
  )
}