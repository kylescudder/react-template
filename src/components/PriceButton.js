
import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

class PriceButton extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: this.props.size,
      lrc: this.props.lrc
    }
    this.changeText = this.changeText.bind(this)
  }

  changeText () {
    if (this.props.service === 'VALUE') {
      if (this.props.size === 'VALUE') {
        this.setState({ text: 'TEXT' })
        return
      }
      this.setState({ text: 'TEXT' })
    }
  }

  render () {
    return (
      <Button variant='light' onClick={this.changeText} className="mt-2">{this.state.text}</Button>
    )
  }
}
export default PriceButton
