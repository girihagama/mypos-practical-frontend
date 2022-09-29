import React, { Fragment } from 'react'
import { Header } from 'semantic-ui-react'
import ReportsGenerator from './ReportsGenerator'

import ReportContextProvider from '../Contexts/ReportsContext'

export default function Reports() {
  return (
    <Fragment>
      <ReportContextProvider>
          <Header>Generate Reports</Header>
          <ReportsGenerator/>
        </ReportContextProvider>
    </Fragment>
  )
}
