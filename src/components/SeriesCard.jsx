export const SeriesCard = ({curElem}) => {
    const {img_url, name, rating, description, cast, genre, watch_url} = curElem;
    return (
        <div className="card-content">
            <li className="card">
                <img src={img_url} alt={name} width="30%" height="30%" />
                <h3><strong>Series name: </strong> {name}</h3>
                <p><strong>⭐ Rating:</strong> <span className="super_hit">{rating}</span></p>
                <p><strong>Summary: </strong> {description}</p>
                <p><strong>Cast: </strong> {cast }</p>
                <p><strong>Genre:</strong> {genre}</p>
                <a href={watch_url}><button>Watch now! </button></a>
            </li>
        </div>
    )
}