import './styles.css'
import { CaretLeft, CaretRight } from "phosphor-react";
import { useState } from 'react';

export default function MovieRow ({title, items}) {
  const [scrollX, setScrollX] = useState(0)

  const handleArrowLeft = () =>{
    // Faço o scroll dependendo do tamnaho da tela do User
    let valueXLeft = scrollX + Math.round(window.innerWidth / 2);
    if (valueXLeft > 0) {
      valueXLeft = 0;
    }
    setScrollX(valueXLeft);
  }

  const handleArrowRight = () => {
    // Pego o tamanho da tela do User e subtraio do tamanho da lista de filmes
    let valueXRight = scrollX - Math.round(window.innerWidth / 2);
    let listWidth = items.results.length * 150;
    if ((window.innerWidth - listWidth) > valueXRight) {
      valueXRight = (window.innerWidth - listWidth) - 60;
    }
    setScrollX(valueXRight);
  }

  return (
    <div className='movieRow'>
      <h2>
        {title}
      </h2>
      <div className="movieRow--left" onClick={handleArrowLeft}>
        <CaretLeft color="#f8f8f8" size={32} />
      </div>
      <div className="movieRow--right" onClick={handleArrowRight}>
        <CaretRight color="#f8f8f8" size={32} />
      </div>
      <div className='movieRow--listarea'>
        <div className='movieRow--list' style={{
          marginLeft: scrollX,
          width: items.results.length * 150
        }}>
          {items.results.length > 0 && items.results.map((item, key) => (
            <div className="movieRow--item" key={key}>
              <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}