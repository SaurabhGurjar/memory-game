import Logo from "./Logo";
import Score from "./Score";
export default function Header({ currentScoreState, bestScoreState }) {
  return (
    <div className="header-container">
      <Logo />
      <Score
        currentScoreState={currentScoreState}
        bestScoreState={bestScoreState}
      />
    </div>
  );
}
