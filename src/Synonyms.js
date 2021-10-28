import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms.length > 0) {
    return (
      <div className="Synonyms">
        <strong className="mb-3">Synonyms: </strong>
        <ul>
          {props.synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return (
      <div className="Synonyms">
        <strong className="mb-3">Synonyms: </strong>
        <div className="message">
          No synonyms are available for this definition
        </div>
      </div>
    );
  }
}
