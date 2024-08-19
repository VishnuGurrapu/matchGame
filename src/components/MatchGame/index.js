import {Component} from 'react'
import './index.css'
import MatchItem from '../MatchItem'
import NavBar from '../NavBar'
import MatchCategories from '../MatchCategories'
import GameOver from '../GameOver'
class MatchGame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTabId: props.tabsList[0].tabId,
      displayImgUrl: this.getInitialImageUrl(),
      isGameOver: false,
      score: 0,
      timer: 60,
    }
    this.timerInterval = null
  }
  componentDidMount() {
    this.startTimer()
  }

  componentWillUnmount() {
    this.clearTimer()
  }
  getInitialImageUrl = () => {
    const {imagesList} = this.props
    return imagesList[0].imageUrl
  }
  getFilteredImages = () => {
    const {imagesList} = this.props
    const {activeTabId} = this.state
    const filteredImages = imagesList.filter(
      eachImageDetails => eachImageDetails.category === activeTabId,
    )
    return filteredImages
  }
  getRandomImageUrl = () => {
    const {imagesList} = this.props
    const randomIndex = Math.floor(Math.random() * imagesList.length)
    return imagesList[randomIndex].imageUrl
  }
  onClickThumbnailImg = imageUrl => {
    const {displayImgUrl, score} = this.state
    if (imageUrl === displayImgUrl) {
      const newScore = score + 1
      this.setState({
        displayImgUrl: this.getRandomImageUrl(),
        score: newScore,
      })
    } else {
      this.setState({
        isGameOver: true,
      })
    }
  }
  updateActiveTabId = tabId => {
    this.setState({activeTabId: tabId})
  }
  startTimer = () => {
    this.timerInterval = setInterval(() => {
      this.setState(prevState => {
        if (prevState.timer <= 1) {
          this.clearTimer()
          return {timer: 0, isGameOver: true}
        }
        return {timer: prevState.timer - 1}
      })
    }, 1000)
  }

  clearTimer = () => {
    if (this.timerInterval) {
      clearInterval(this.timerInterval)
      this.timerInterval = null
    }
  }
  playAgain = () => {
    const {tabsList} = this.props
    this.clearTimer()
    this.setState(
      {
        activeTabId: tabsList[0].tabId,
        displayImgUrl: this.getInitialImageUrl(),
        isGameOver: false,
        score: 0,
        timer: 60,
      },
      () => this.startTimer(),
    )
  }

  render() {
    const {tabsList} = this.props
    const {activeTabId, isGameOver, score, displayImgUrl, timer} = this.state
    const filteredImages = this.getFilteredImages()
    return (
      <div className="appContainer">
        <NavBar time={timer} score={score} />
        {!isGameOver ? (
          <div className="gameContainer">
            <img className="matchImg" alt="match" src={displayImgUrl} />
            <ul className="tabs-container">
              {tabsList.map(tabDetails => (
                <MatchCategories
                  key={tabDetails.tabId}
                  tabDetails={tabDetails}
                  updateActiveTabId={this.updateActiveTabId}
                  isActive={activeTabId === tabDetails.tabId}
                />
              ))}
            </ul>
            <ul className="project-list-container">
              {filteredImages.map(imageDetails => (
                <MatchItem
                  key={imageDetails.id}
                  onClickThumbnailImg={this.onClickThumbnailImg}
                  imageDetails={imageDetails}
                />
              ))}
            </ul>
          </div>
        ) : (
          <GameOver score={score} playAgain={this.playAgain} />
        )}
      </div>
    )
  }
}

export default MatchGame
