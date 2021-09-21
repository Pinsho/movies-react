import { MovieCard } from "./MovieCard";
import movies from "./MoviesList.json";
import styles from "./MoviesGrid.module.css";


export function MoviesGrid() {
    return (
        <ul className={styles.grid}>
            {movies.map(function(movie) {
                return (
                    <MovieCard key={movie.id} movie={movie} />
                );
            })}
        </ul>
    );
}