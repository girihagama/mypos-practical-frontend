import React, { Fragment } from 'react';
import { Header } from 'semantic-ui-react';
import InvoicesTable from './InvoicesTable';

import InvoiceContextProvider from '../Contexts/InvoiceContext';
import InvoicesCreate from './InvoicesCreate';

export default function Reports() {
  return (
    <Fragment>
      <InvoiceContextProvider>
          <Header>Manage Invoices</Header>
          <InvoicesCreate/>
          <InvoicesTable/>
        </InvoiceContextProvider>
    </Fragment>
  )
}
