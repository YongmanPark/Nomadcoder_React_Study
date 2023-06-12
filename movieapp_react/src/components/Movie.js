import PorpTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({id, coverImg, title, summary, genres}){

    return(
    <div>
        <img src={coverImg} alt={title}></img>
        <h2><Link to ={`/movie/${id}`}>{title}</Link></h2> 
        <p>{summary}</p>

        <ul>
            {genres.map((g) => <li key={g}>{g}</li>)}
        </ul>
    </div>
    ) 
}

Movie.PorpTypes = {
    id : PorpTypes.number.isRequired, 
    coverImg : PorpTypes.string.isRequired,
    title : PorpTypes.string.isRequired,
    summary : PorpTypes.string.isRequired,
    genres : PorpTypes.arrayOf(PorpTypes.string).isRequired
}


export default Movie;