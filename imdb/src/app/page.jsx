import Results from '../components/Results';

const API_KEY = process.env.TMDB_API_KEY

export default async function Home({searchParams}) {
    const genre = searchParams.genre || 'fetchTrendingData';
    const res = await fetch(
        `https://api.themoviedb.org/3/${
            genre === "fetchTopRatedData"
            ? "movie/top_rated"
            : "trending/all/week"
         }?api_key=${API_KEY}&language=en-US&page=2`,{ next: { revalidate: 50000 } });
    if (!res.ok) {
        throw new Error(res.statusText);
    }
    const data = await res.json();
    const results = data.results;
   // console.log(results);
    return <div><Results results={results}></Results></div>


}
