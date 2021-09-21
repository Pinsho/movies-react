import styles from "./MovieCard.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


export function MovieCard({ movie }) {
    const imgURL = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    const date = movie.release_date.split('-');
    var year = date[0];
    return (
        <li className={styles.grid}>
            <div className={styles.language}>{movie.original_language}</div> 
            <img width={230} height={350} className={styles.imgMovie} src={imgURL} alt={movie.title} />
            <div className={styles.rating}><FontAwesomeIcon icon={faStar} /> {movie.vote_average}</div>
            <div className={styles.title}>{movie.title}</div>
            <div className={styles.year}>({year})</div>
        </li> 
    );
}
