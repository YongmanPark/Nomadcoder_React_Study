import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function Detail(){
    const [movie, setMovie] = useState(0);
    const [movieInfo, setMovieInfo] = useState("");
    const {id} = useParams();
    const getMovie = async () => {
    const json = await(
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovieInfo(json.data.movie);
        console.log(json.data.movie.medium_cover_image);
    };
    useEffect( () => {
        getMovie();
    }, []);
    return (
        <div>
            <img src={movieInfo.medium_cover_image}></img>
            <h2>{movieInfo.title}</h2>
            <h5>rating : {movieInfo.rating}</h5>    
            <h5>year : {movieInfo.year}</h5>    
    
        <div><Link to="/">Home</Link></div>
        </div>
    )
}

export default Detail;