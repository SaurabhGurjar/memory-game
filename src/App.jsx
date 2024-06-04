import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

import Cards from "./Cards";
import Loader from "./components/Loader";

function App() {
  const score = useState(0);
  const bestScore = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const load = setTimeout(() => {
      setLoaded(true);
    }, 1500);
  }, []);

  return (
    <>
      <Header currentScoreState={score} bestScoreState={bestScore} />
      {!loaded && <Loader />}
      {loaded && <Cards currentScore={score} bestScore={bestScore} />}
      <Footer />
    </>
  );
}

export default App;
