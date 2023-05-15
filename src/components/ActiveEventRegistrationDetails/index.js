// Write your code here
import './index.css'

const registrationConstant = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {registrationStatus} = props
  const renderYetToRegisterView = () => (
    <div className="register-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        className="tet_to_image"
        alt="yet to register"
      />
      <p className="register-description">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="register-here-button">
        Register Here
      </button>
    </div>
  )

  const renderRegisteredView = () => (
    <div className="registration-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        className="registered-image"
        alt="registered"
      />
      <h1 className="registration-heading">
        You have already registered for the event
      </h1>
    </div>
  )

  const renderRegistrationsClosedView = () => (
    <div className="registration-container">
      <img
        className="closed-image"
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
      />
      <h1 className="registration-heading">Registrations Are Closed Now</h1>
      <p className="registration-description">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  const renderNoActiveEventView = () => (
    <p className="no-active-event-description">
      Click on an event, to view its registration details
    </p>
  )

  const renderRegistrationStatus = () => {
    switch (registrationStatus) {
      case registrationConstant.yetToRegister:
        return renderYetToRegisterView()
      case registrationConstant.registered:
        return renderRegisteredView()
      case registrationConstant.registrationsClosed:
        return renderRegistrationsClosedView()
      default:
        return renderNoActiveEventView()
    }
  }
  return <>{renderRegistrationStatus()}</>
}

export default ActiveEventRegistrationDetails
