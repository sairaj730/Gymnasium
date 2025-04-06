import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCard";
import "./Netflix.css";
export const NetflixSeries =() => {
    return (
        <div >
            <h1 className="common-heading">List of series available </h1>
            <ul className="container">
                {seriesData.map((curElem) => (
                    <SeriesCard key={curElem.id} curElem={curElem} />
                ))}
            </ul>
        </div>
    );
  }