import './index.css'

const registrationStatus = {
  registered: 'REGISTERED',
  registrationClosed: 'REGISTRATIONS_CLOSED',
  yetToRegisterd: 'YET_TO_REGISTER',
}

const ActiveEventRegistrationDetails = props => {
  const {activeEventRegistrastionStatus} = props

  const renderNoActiveEventView = () => (
    <p className="no-active-event-description">
      Click on an event, to view its registration details
    </p>
  )

  const renderRegistrationClosedView = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registration-closed"
        className="registrastion-closed-image"
      />
      <h1 className="registration-closed-heading">
        Registration Are Closed Now!
      </h1>
      <p className="registartion-closed-description">
        Stay tuned. We will reopen the registration soon!
      </p>
    </div>
  )

  const renderRegisteredView = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-image"
      />
      <h1 className="registration-heading">
        You have alreadyregistered for the event
      </h1>
    </div>
  )

  const renderYetToRegisterView = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to regester"
        className="yet-to-register-image"
      />
      <p className="register-description">
        A live Performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautifull art form.
      </p>
      <button type="button" className="register-here-button">
        Register Here
      </button>
    </div>
  )

  const renderActiveEventRegistrationDetails = () => {
    switch (activeEventRegistrastionStatus) {
      case registrationStatus.registered:
        return renderRegisteredView()
      case registrationStatus.registrationClosed:
        return renderRegistrationClosedView()
      case registrationStatus.yetToRegisterd:
        return renderYetToRegisterView()
      default:
        return renderNoActiveEventView()
    }
  }

  return (
    <div className="registration-status-container">
      {renderActiveEventRegistrationDetails()}
    </div>
  )
}

export default ActiveEventRegistrationDetails
