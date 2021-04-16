import { Card, Row, Col } from 'react-bootstrap'
import React from 'react'
import PriceButton from './PriceButton'

function Service () {
  return (
    <Row>
        <Col xs={{ span: 8, offset: 2 }} className="align-self-center">
            <Card className="mt-4">
                <h2>Price list:</h2>
                <Card.Body className="text-dark imageContainer cropped">
                        <section className="row">
                            <div className="col-12">
                                <section>
                                    <article className="pb-2">
                                        <h4>List Item</h4>
                                        <Row>
                                            <Col>
                                                <PriceButton size="VALUE" service="VALUE" />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                            <PriceButton size="VALUE" service="VALUE" />
                                            </Col>
                                        </Row>
                                    </article>
                                    <hr />
                                </section>
                            </div>
                        </section>
                </Card.Body>
            </Card>
        </Col>
    </Row>
  )
}
export default Service
