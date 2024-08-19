import './index.css'

const MatchCategories = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails
  const onClick = () => {
    updateActiveTabId(tabId)
  }
  const ActiveTabClass = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        onClick={onClick}
        type="button"
        className={`tab-btn ${ActiveTabClass}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default MatchCategories
