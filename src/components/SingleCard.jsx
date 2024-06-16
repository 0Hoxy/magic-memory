import React from "react";
import "./SingleCard.css";

const SingleCard = ({ card, handleChoice, flipped, disabled }) => {
  //App에서 작성한 props를 여기서 받아서 사용해야함! (handleChoice도 여기서 사용하기 위해서 받았고, filpped도 마찬가지)
  function handleClick() {
    if (!disabled && !flipped) handleChoice(card);
  }
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img onClick={handleClick} className="back" src="/img/cover.png" alt="card back" />
      </div>
    </div>
  );
};

export default SingleCard;
