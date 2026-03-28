import Movie from "./Movie";
import './MovieList.css';

function MovieList(props){
    const {movies = []} = props;

    return (
        <div className="movies">
            {
                movies.map((movie, index) => {
                    return <Movie key={index} {...movie} />
                })
            }
        </div>
    )
}

export default MovieList;