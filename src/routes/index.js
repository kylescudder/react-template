import { Switch, Route } from 'react-router-dom'
import React from 'react'

import Services from '../pages/services'
import Contact from '../pages/contact'
export default function Routes () {
  return (
        <Switch>
            <Route exact path="/services" component={Services} />
            <Route exact path="/contact" component={Contact} />
        </Switch>
  )
}
