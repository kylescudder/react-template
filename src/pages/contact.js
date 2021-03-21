import { Button, Modal } from 'react-bootstrap'
import * as React from 'react'

class Contact extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
      status: 'Submit',
      show: false
    }
  }

  handleModal () {
    this.setState({ show: false })
  }

  render () {
    const buttonText = this.state.status
    return (
      <section>
        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text"
                    id="name"
                    className="form-control"
                    onChange={this.handleChange.bind(this)} />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email"
                    id="email"
                    className="form-control"
                    onChange={this.handleChange.bind(this)}
                    aria-describedby="emailHelp" />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message"
                    className="form-control"
                    onChange={this.handleChange.bind(this)}
                    rows="5"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">{buttonText}</button>
        </form>
        <Modal show={this.state.show} >
          <Modal.Header>
            Thank you for getting in touch!
          </Modal.Header>
          <Modal.Body>
            Your message has been sent and we will get in touch with you as soon as we can.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="cancel" onClick={() => { this.handleModal() }}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </section>
    )
  }

  handleChange (event) {
    const field = event.target.id
    if (field === 'name') {
      this.setState({ name: event.target.value })
    } else if (field === 'email') {
      this.setState({ email: event.target.value })
    } else if (field === 'message') {
      this.setState({ message: event.target.value })
    }
  }

  handleSubmit (e) {
    e.preventDefault()
    this.setState({ status: 'Sending' })
    fetch('http://localhost:5000/contact', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(
      (response) => (response.json())
    ).then((response) => {
      if (response.status === 'sent') {
        this.setState({ status: 'Sent' })
        this.setState({ show: true })
      } else if (response.status === 'fail') {
        alert('Message failed to send.')
      }
    })
  }
}
export default Contact
