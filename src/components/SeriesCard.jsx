export const SeriesCard = (props) => {
    return (
            <div>
            <li key={props}>
            <img src={props.curElem.img_url} alt={props.curElem.name} width="30%" height="30%" />
            <h3><strong>Series name: </strong> {props.curElem.name}</h3>
            <p><strong>⭐ Rating:</strong> {props.curElem.rating}</p>
            <p><strong>Summary: </strong> {props.curElem.description}</p>
            <p><strong>Cast: </strong> {props.curElem.cast }</p>
            <p><strong>Genre:</strong> {props.curElem.genre}</p>
            <a href={props.curElem.watch_url}><button>Watch now! </button></a>
          </li>
            </div>
    )
}