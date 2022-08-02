import './styles.css'

export function FeaturedMovie({item}) {

    const firstData = new Date(item.first_air_date)

    const genres = []
    for (let i in item.genres){
        genres.push(item.genres[i].name)
    }

    return (
        <section 
            className="featured" 
            style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
            }}>
            <div className="gradient--vertical">
                <div className="gradient--horizontal">
                    <div className="featured--name">
                        {item.original_name}
                    </div>
                    <div className='featured--info'>
                        <div className='featured--points'>{item.vote_average.toFixed(2)} pontos</div>
                        <div className='featured--year'>{firstData.getFullYear()}</div>
                        <div className='featured--seasons'>{item.number_of_seasons} temporada{item.number_of_seasons !==1 ? 's' : ''}</div>
                    </div>
                    <div className="featured--description">
                        {item.overview}
                    </div>
                    <div className="featured--buttom">
                        <a className='featured--watch' href={`watch/${item.id}`}>Assisitir</a>
                        <a className='featured--myList' href={`list/add/${item.id}`}>+ Minha Lista</a>
                    </div>
                    <div className="featured-genres"><strong>Gêneros:</strong> {genres.join(', ')}</div>
                </div>
            </div>
            <div>
            </div>
        </section>
    )
}