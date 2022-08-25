const API_KEY = '4e27f3c5ae24373059476f6da2d8a824';
const API_BASE = 'https://api.themoviedb.org/3';

// JSON DAS FUNÇÕES PARA PEGAR AS INFORMAÇÕES 
// (cada uma dessas informações é feita uam consulta diferente)
// - ORIGINAIS DA METFLIX
// - RECOMENDADOS (TRENDIG)
// EM ALTA (TOP RATED)
// - AÇÃO
// - COMÉDIA
// - TERROR
// - ROMANCE
// - DOCUMENTÁRIO

// Função auxiliar para efetivamente pegar as informações, ela vai dar um Fetch na
// URL que eu quero pegar, para assim pegar o JSON de resultado e retornar esse JSON
// vai repetir essa função em cada um dos itens
// Basicamente, vai mandar um (endpoint), requisitar um resultado (em um site) e enviar de volta.

const basicFetch = async (endpoint) =>{
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

// fUNÇÃO PARA PEGAR TODA A LISTA QUE EU QUERO,
//  COLOCAR CADA UAM EM SEU LUGAR E DEPOIS RETORNAR PARA A APLICAÇÃO
export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await basicFetch(`/discover/tv?with_network=123&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'topgrated',
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)                                                                       
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            },
        ];
    },
    getMovieInfo: async (movieId, type) => {
        let info = {};

        if(movieId) {
            switch(type) {
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;
                default:
                    info = null;
            }
        }

        return info;
    }     
}


