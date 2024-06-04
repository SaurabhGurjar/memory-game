export function shuffleCharArr(charArr) {
  const shuffledArr = new Set();
  while (shuffledArr.size !== charArr.length) {
    if (shuffledArr.length === charArr.length) break;
    const randomIndex = Math.floor(Math.random() * 10);
    const index =
      randomIndex > charArr.length - 1
        ? randomIndex - (randomIndex - (charArr.length - 1))
        : randomIndex;
    if (!shuffledArr.has(charArr[index])) {
      shuffledArr.add(charArr[index]);
    }
  }
  return Array.from(shuffledArr);
}
