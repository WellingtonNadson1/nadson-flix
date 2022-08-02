
const basicFetch = async (endpoint) => {
    const request = await fetch(`${import.meta.env.VITE_BASE_URL}${endpoint}${import.meta.env.VITE_API_KEY}`)
    const json = await request.json()
    return json
}

export async function getHomeList () {
        return [
            {
                slug: 'originals',
                title: 'Originais Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=`)
            },
            {
                slug: 'toprated',
                title: 'Em alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=`)
            },
        ]
    }

export async function getInfoMovie (movieID, type) {
    let infoMovie = {}

    if(movieID) {
        switch (type) {
            case 'movie':
                infoMovie = await basicFetch(`/movie/${movieID}?language=pt-BR&api_key=`);
                break;
    
            case 'tv':
                infoMovie = await basicFetch(`/tv/${movieID}?language=pt-BR&api_key=`);
                break;
        
            default:
                break;
        }
    }
    return infoMovie
}