import { shuffleCharArr } from "../utils/Shuffle";

const cardClickedOnce = new Set();

function handleClick(name, cardsArrState, currentScore, bestScore) {
  const [cards, setCardsPos] = cardsArrState;
  const [score, setScore] = currentScore;
  const [bstScore, setBstScore] = bestScore;

  if (cardClickedOnce.has(name)) {
    if (bstScore <= score) {
      setBstScore(score);
    }
    setScore(0);
    cardClickedOnce.clear();
  } else {
    setScore(score + 1);
    // if (bstScore <= score) {
    //   setBstScore(score + 1);
    // }
  }
  cardClickedOnce.add(name);

  const newCardsArr = [...cards];
  setCardsPos(shuffleCharArr(newCardsArr));
}

export default function CharacterCard({
  name,
  image,
  cardsArrState,
  currentScore,
  bestScore,
}) {
  return (
    <div
      className="character-card unselectable"
      onClick={() => {
        handleClick(name, cardsArrState, currentScore, bestScore);
      }}
    >
      <div className="card-img-wrapper">
        <img src={image} alt="character" className="character-img" />
      </div>
      <h3 className="character-name">{name}</h3>
    </div>
  );
}
