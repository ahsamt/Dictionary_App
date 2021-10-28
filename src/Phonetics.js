import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics mb-2">
      <div className="ph-text">{props.phonetics.text}</div>
      <a
        href={props.phonetics.audio}
        className="ph-sound"
        target="_blank"
        rel="noreferrer"
      >
        <i class="fas fa-play-circle"></i>
      </a>
    </div>
  );
}
