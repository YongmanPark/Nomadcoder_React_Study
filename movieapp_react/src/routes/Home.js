import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
      const json  = await(
        await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
        )  
      ).json();
        setMovies(json.data.movies);
        setLoading(false);
    };
    useEffect(()=>{
      getMovies();
    }, []);

    return (
        <div className="App">
    {loading ? <h3>loading...</h3> : 
        <div>{movies.map( (movies) => (
        <Movie id={movies.id} key={movies.id} coverImg={movies.medium_cover_image} title={movies.title} summary={movies.summary} genres={movies.genres}/>  
        ))}</div>
    }
    </div>
    );
}

export default Home;