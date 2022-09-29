import React, { Fragment } from 'react'
import { Header } from 'semantic-ui-react'
import ReportsGenerator from './ReportsGenerator'

export default function Reports() {
  return (
    <Fragment>
        <Header>Generate Reports</Header>
        <ReportsGenerator/>
    </Fragment>
  )
}
