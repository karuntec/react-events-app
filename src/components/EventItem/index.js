import './index.css'

const EventItem = props => {
  const {key, tabDetails, activeEventId, isActive} = props
  const {imageUrl, name, location} = tabDetails
  const eventImageClassName = isActive ? 'active-image' : 'not-active-img'

  const onClickEvent = () => {
    activeEventId(key)
  }
  return (
    <li className="event-item">
      <button type="button" onClick={onClickEvent} className="event-button">
        <img src={imageUrl} alt="event" className={eventImageClassName} />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
