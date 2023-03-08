import Results from "@/components/Results";

export default async function SearchPage({ params }) {
    const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${params.searchTerm}&
        language=en-US&&include_adult=false`
    );

    if(!res.ok) {
        throw new Error(res.statusText);
    }
    const data = await res.json();
    const searchMovies = data.results;

    return (
        <div>
            {searchMovies && searchMovies.length === 0 &&
                <h1 className="text-center pt-6">No results found</h1>}
            {searchMovies && searchMovies.length > 0 && <Results results={searchMovies}></Results>}
        </div>
    )
}