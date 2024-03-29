import React from "react";
import Meaning from "./Meaning";
import "./SearchResults.css";
import Phonetics from "./Phonetics";

export default function SearchResults(props) {
  if (props.result) {
    let exists = new Set();
    const cleanPhonetics = props.result.phonetics.filter((item) => {
      let duplicate = exists.has(item.text) | !("text" in item);
      exists.add(item.text);
      return !duplicate;
    });
    return (
      <div className="SearchResults">
        <div className="word-details">
          <h2>{props.result.word}</h2>
          <div className="row">
            {cleanPhonetics.map(function (pronunciation, index) {
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
