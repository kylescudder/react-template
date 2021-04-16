import * as React from 'react'
import { Row, Col } from 'react-bootstrap'
import card1 from '../images/card1.jpg'
import Cards from '../components/Cards'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <div>
        <section id="hpContent" className="fadeInUp">
          <Row className="ml-0 mr-0">
            <Col>
              <h1>Strap line</h1>
            </Col>
          </Row>
        </section>
        <section className="fadeInUp pl-3 pr-3">
          <h3 className="mt-5 mb-5">
            At COMPANY NAME we offer<br />
          </h3>
          <Row className="mb-3">
            <Col>
              <Cards src={card1} text="SERVICE" />
            </Col>
            <Col>
                <Cards src={card1} text="SERVICE" />
            </Col>
            <Col>
                <Cards src={card1} text="SERVICE" />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
                <Cards src={card1} text="SERVICE" />
            </Col>
            <Col>
                <Cards src={card1} text="SERVICE" />
            </Col>
            <Col>
                <Cards src={card1} text="SERVICE" />
            </Col>
          </Row>
        </section>
      </div>
    )
  }
}
export default Home
