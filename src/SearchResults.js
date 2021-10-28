import React from "react";
import Meaning from "./Meaning";
import "./SearchResults.css";
import Phonetics from "./Phonetics";

export default function SearchResults(props) {
  if (props.result) {
    return (
      <div className="SearchResults">
        <div className="word-details">
          <h2>{props.result.word}</h2>
          <div class="row">
            {props.result.phonetics.map(function (pronunciation, index) {
              return (
                <div key={index} className="col">
                  <Phonetics phonetics={pronunciation} />
                </div>
              );
            })}
          </div>
        </div>
        {props.result.meanings.map(function (meaning, index) {
          return (
            <div className="meanings" key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
