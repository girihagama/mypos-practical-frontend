import React, { Fragment } from 'react'
import { Header } from 'semantic-ui-react'
import ProductsTable from './ProductsTable'

export default function Reports() {
  return (
    <Fragment>
        <Header>Manage Products</Header>
        <ProductsTable/>
    </Fragment>
  )
}
