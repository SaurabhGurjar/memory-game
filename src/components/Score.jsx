export default function Score({ currentScoreState, bestScoreState }) {
  const score = currentScoreState[0];
  const bestScore = bestScoreState[0];
  return (
    <div className="score-wrapper">
      <p>
        <b>Score</b>: {score}
      </p>
      <p>
        <b>Best score</b>: {bestScore}
      </p>
    </div>
  );
}
