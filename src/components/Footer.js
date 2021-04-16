import React from 'react'
import { Col, Row } from 'react-bootstrap'

class Footer extends React.Component {
  render () {
    return (
      <div className="footer fadeInUp pt-3 pb-3 mt-4">
        <Row>
          <Col>
            COMPANY NAME
          </Col>
          <Col>
            Website by Kyle Scudder
          </Col>
          <Col>
          <div>&copy; {(new Date().getFullYear())}</div>
          </Col>
        </Row>
    </div>
    )
  }
}
export default Footer
