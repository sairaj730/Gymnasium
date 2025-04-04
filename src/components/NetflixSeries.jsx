import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCard";
export const NetflixSeries =() => {
    return (
        <div>
            <h1>List of movies available: </h1>
            <ul>
                {seriesData.map((curElem) => (
                    <SeriesCard key={curElem.id} curElem={curElem} />
                ))}
            </ul>
        </div>
    );
  }