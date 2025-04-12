import { DerivedState } from "./components/DerivedState";
import {NetflixSeries} from "./components/NetflixSeries";
import "./components/hooks/Modifications.css";
import { State } from "./components/hooks/State";
export const App = () => {
  return (
      <>
      <DerivedState/>
      {/* <NetflixSeries/> */}
      {/* <State/> */}
      {/* <Sibling /> */}
    </>
  );
};
export function Sibling() {
  console.log("Sibling component rendered");
  return (<div className="main-div">
      <h2>Sibling compoent</h2>
  </div>);
}

