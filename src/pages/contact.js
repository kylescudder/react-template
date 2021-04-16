import { Button, Modal, Row, Col } from 'react-bootstrap'
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
      <section className="fadeInUp pl-3 pr-3 pt-4">
        <Row>
          <Col xs={{ span: 8, offset: 2 }}>
            <h3>Want to enquire about a service? Just fill in the form below and we will get back to you as soon as we can.</h3>
          </Col>
        </Row>
      <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
        <Row>
          <Col xs={{ span: 8, offset: 2 }}>
          <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text"
                    id="name"
                    className="form-control"
                    placeholder="Jonh Smith"
                    onChange={this.handleChange.bind(this)} />
            </div>
          </Col>
        </Row>
        <Row>
        <Col xs={{ span: 8, offset: 2 }}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email"
                    id="email"
                    className="form-control"
                    placeholder="JonhSmith@example.com"
                    onChange={this.handleChange.bind(this)}
                    aria-describedby="emailHelp" />
            </div>
            </Col>
        </Row>
        <Row>
        <Col xs={{ span: 8, offset: 2 }}>
            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message"
                    className="form-control"
                    placeholder="Type youe message here..."
                    onChange={this.handleChange.bind(this)}
                    rows="5"></textarea>
            </div>
            </Col>
        </Row>
        <Row>
        <Col xs={{ span: 8, offset: 2 }}>
            <button type="submit" className="btn btn-primary">{buttonText}</button>
            </Col>
        </Row>
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
