import styled from "styled-components";
export const SeriesCard = ({curElem}) => {
    const {img_url, name, rating, description, cast, genre, watch_url} = curElem;
    const ratingClass=rating>=8.5 ? "super-hit":"average";

    const WatchButton=styled.button`
            margin: 5px 0 20px 10px;
            padding: 6px 12px;
            font-size: 0.9rem;
            border: none;
            border-radius: 4px;
            background-color: ${(props) => (props.rating)>=8.5 ? "#7dcea0" : "#f7dc6f"};
            color: #000000;
            font-weight: bold;
            cursor: pointer;
            transition: background-color 0.25s;
            width: auto;
    `;
    return (
        <div>
            <li className="card">
                <img src={img_url} alt={name} width="30%" height="30%" />
                <h3 ><strong>Series name: </strong> {name}</h3>
                <p><strong>⭐ Rating:</strong> <span className= {ratingClass}>{rating}</span></p>
                <p className="text-3xl font-bold underline text-cyan-200"><strong>Summary: </strong> {description}</p>
                <p><strong>Cast: </strong> {cast }</p>
                <p><strong>Genre:</strong> {genre}</p>
                <a href={watch_url}><WatchButton rating={rating}>Watch now</WatchButton></a>
            </li>
        </div>
    )
}