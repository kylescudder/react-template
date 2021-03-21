import Card from 'react-bootstrap/Card'
import React from 'react'

function Service () {
  return (
        <Card className="mt-4">
            <Card.Title>Price list:</Card.Title>
            <Card.Body className="text-dark">
                    <section className="row">
                        <div className="col-6 offset-3">
                        <h4>Service</h4>
                            <ul>
                                <li>
                                Service
                                </li>
                                <li>
                                Service
                                </li>
                            </ul>
                        </div>
                    </section>
            </Card.Body>
        </Card>
  )
}
export default Service
