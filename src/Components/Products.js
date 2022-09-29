import React, { Fragment } from 'react'
import { Header } from 'semantic-ui-react'
import ProductsTable from './ProductsTable'
import ProductsCreate from './ProductsCreate'

import ProductContextProvider from '../Contexts/ProductContext'

export default function Reports() {
  return (
    <Fragment>
      <ProductContextProvider>
        <Header>Manage Products</Header>
        <ProductsCreate/>
        <ProductsTable/>
      </ProductContextProvider>
    </Fragment>
  )
}
