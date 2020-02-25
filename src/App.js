import React, { useState } from "react";
import "./App.css";

function App() {
  const [homeCount, setHomeCount] = useState(0);
  const [awayCount, setAwayCount] = useState(0);
  const [quarter, setQuarter] = useState(1);

  return (
    <div className="App">
      <div className="Scoreboard-container">
        <div className="homeCount">
          <p>HOME</p>
          <h2>{homeCount}</h2>
        </div>
        <div className="quarter">
          <h2>QTR: {quarter}</h2>
        </div>
        <div className="awayCount">
          <p>AWAY</p>
          <h2>{awayCount}</h2>
        </div>
      </div>
      <div className="buttons-container">
        <div className="score-buttons"> 
          <button onClick={() => setHomeCount(homeCount + 6)}>
            Home Touchdown! (6)
          </button>
          <button onClick={() => setHomeCount(homeCount + 1)}>
            Home Extra Point (1)
          </button>
          <button onClick={() => setHomeCount(homeCount + 3)}>
            Home Field Goal (3)
          </button>
          <button onClick={() => setAwayCount(awayCount + 6)}>
            Away Touchdown! (6)
          </button>
          <button onClick={() => setAwayCount(awayCount + 1)}>
            Away Extra Point (1)
          </button>
          <button onClick={() => setAwayCount(awayCount + 3)}>
            Away Field Goal (3)
          </button>
        </div>
        
        <div className="reset-container">
        <button onClick={() => {
          if (quarter === 4){
            setQuarter(1)
          } else {
            setQuarter(quarter + 1)
          }
        }}>Next Quarter</button>
        </div>

        <div className="reset-container">
          <button onClick={() => setHomeCount(0)}>Reset Home</button>
          <button onClick={() => setAwayCount(0)}>Reset Away</button>
        </div>
      </div>
    </div>
  );
}

export default App;
