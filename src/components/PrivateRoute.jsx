import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export default function PrivateRoute({ component: Component }) {
  return (
    <Route
      render={() => localStorage.getItem('token') ? <Component /> : <Redirect to="/Login" />}
    />
  )
}