import { useEffect, useState } from "react";

//https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year
function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() =>{
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json(); 
    setMovies(json.data.movies);
    setLoading(false);
  }
  console.log(movies);
  return (
    <div className="App">
      {loading ? <h3>loading...</h3> : null}
    </div>
  );
}

export default App;

/** 
 *  const getMovies = async() =>{
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  }
 */