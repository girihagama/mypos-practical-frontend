import React, { Fragment } from 'react'
import { Header } from 'semantic-ui-react'
import InvoicesTable from './InvoicesTable'

export default function Reports() {
  return (
    <Fragment>
        <Header>Manage Invoices</Header>
        <InvoicesTable/>
    </Fragment>
  )
}
