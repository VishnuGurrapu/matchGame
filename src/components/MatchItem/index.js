import './index.css'

const MatchItem = props => {
  const {imageDetails, onClickThumbnailImg} = props
  const {id, imageUrl, thumbnailUrl, category} = imageDetails
  const onClickImg = () => {
    onClickThumbnailImg(imageUrl)
  }
  return (
    <>
      <li className="project-item-container">
        <button onClick={onClickImg} className="btn">
          <img
            className="project-item-image"
            src={thumbnailUrl}
            alt="thumbnail"
          />
        </button>
      </li>
    </>
  )
}

export default MatchItem
