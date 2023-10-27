import './index.css'

const HistoryItem = props => {
  const {listItems, onDeleteHistory} = props
  const {id, title, timeAccessed, logoUrl, domainUrl} = listItems

  const removeHistoryItem = () => {
    onDeleteHistory(id)
  }

  return (
    <li className="list-item-container">
      <div className="list-container">
        <p className="time-accessed">{timeAccessed}</p>
        <img src={logoUrl} className="logo-url" alt="domain logo" />
        <p className="title">{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>
      <button type="button" onClick={removeHistoryItem} data-testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default HistoryItem
