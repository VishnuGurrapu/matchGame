import './index.css'

const GameOver = props => {
  const {score, playAgain} = props

  return (
    <div className="Container">
      <div className="gameOverContainer">
        <img
          alt="trophy"
          className="trophy"
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        />
        <div className="ScoreContainer">
          <p className="score2">Your Score</p>
          <p className="Score2">{score}</p>
        </div>
        <button onClick={playAgain} className="btnContainer">
          <img
            className="PAicon"
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
          />
          <p className="btnPara">PLAY AGAIN</p>
        </button>
      </div>
    </div>
  )
}

export default GameOver
