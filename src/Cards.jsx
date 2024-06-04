import { useState } from "react";
import { shuffleCharArr } from "./utils/Shuffle";
import CharacterCard from "./components/Character-card";

import krishnaImg from "./assets/characters/krishna.png";
import hamsiImg from "./assets/characters/hamsi.png";
import balaramImg from "./assets/characters/balaram.png";
import lalithaImg from "./assets/characters/lalitha.png";
import madhuImg from "./assets/characters/madhu.png";
import radharaniImg from "./assets/characters/radharani.png";
import subalaImg from "./assets/characters/subala.png";
import vishakhaImg from "./assets/characters/vishakha.png";

const charArr = [
  {
    name: "Krishna",
    image: krishnaImg,
  },
  {
    name: "Balaram",
    image: balaramImg,
  },
  {
    name: "RadhaRani",
    image: radharaniImg,
  },
  {
    name: "Hamsi",
    image: hamsiImg,
  },
  {
    name: "Lalitha",
    image: lalithaImg,
  },
  {
    name: "Madhu",
    image: madhuImg,
  },
  {
    name: "Subala",
    image: subalaImg,
  },
  {
    name: "Vishakha",
    image: vishakhaImg,
  },
];

export default function Cards({ currentScore, bestScore }) {
  const cardsArrState = useState(shuffleCharArr(charArr));
  const cardsArr = cardsArrState[0];
  return (
    <div className="cards-container">
      {cardsArr.map((character) => {
        return (
          <CharacterCard
            key={character.name}
            name={character.name}
            image={character.image}
            cardsArrState={cardsArrState}
            currentScore={currentScore}
            bestScore={bestScore}
          />
        );
      })}
    </div>
  );
}
