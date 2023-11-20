import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../card/Card";
import './movieList.css';

const MovieList = () => {
    const [movieList, setMovieList] = useState([]);
    const {type} = useParams();


    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [type])
  
    const getData = async () => {
            try {
              const res = await axios.get(
                `https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
              );
              setMovieList(res.data.results);
            } catch (error) {
              console.log(error);
            }
    }
    return (
        <div className="movie__list">
            <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="list__cards">
                {
                    movieList.map(movie => (
                        <Card key={movie.id} movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList;
