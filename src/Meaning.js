import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";
import Example from "./Example";

export default function Meaning(props) {
  if (props.meaning) {
    return (
      <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>

        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index} className="definition mb-2">
              <strong>Definition{index === 0 ? "" : ` ${index + 1}`}:</strong>
              <div className="def-part">{definition.definition}</div>
              <Example example={definition.example} />
              <Synonyms synonyms={definition.synonyms} />
              {index < props.meaning.definitions.length - 1 ? "***" : ""}
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
