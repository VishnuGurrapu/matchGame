import './index.css'
/*<div className="scoreAndTimeContainer">
        <div className="scoreContainer">
          <p className="score">Score:</p>
          <p className="Score">{score}</p>
        </div>
        <div className="scoreContainer">
          <img
            className="timerSymbol"
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
          />
          <p className="Score">{time} sec</p>
        </div>
      </div>*/
const NavBar = props => {
  const {time, score} = props
  return (
    <div className="header">
      <img
        alt="website logo"
        className="logo"
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
      />
      <ul className="scoreAndTimeContainer">
        {' '}
        {/* New <ul> for navigation items */}
        <li className="scoreContainer">
          <p className="score">Score: </p>
          <p className="Score">{score}</p>
        </li>
        <li className="scoreContainer">
          <img
            className="timerSymbol"
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
          />
          <p className="Score">{time} sec</p>
        </li>
      </ul>
    </div>
  )
}
export default NavBar
