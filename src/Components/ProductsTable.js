import React from 'react'
import { Table } from 'semantic-ui-react'

export default function ProductsTable() {
  return (
    <div>
      <Table celled compact columns={'16'}>
            <Table.Header fullWidth>
            <Table.Row>
                <Table.HeaderCell>Product ID</Table.HeaderCell>
                <Table.HeaderCell>Product Name</Table.HeaderCell>
                <Table.HeaderCell>Product Price</Table.HeaderCell>
                <Table.HeaderCell>Product Qty</Table.HeaderCell>
            </Table.Row>
            </Table.Header>

            <Table.Body>
            <Table.Row>
                <Table.Cell>John</Table.Cell>
                <Table.Cell>Approved</Table.Cell>
                <Table.Cell>Approved</Table.Cell>
                <Table.Cell>Approved</Table.Cell>
                <Table.Cell textAlign='right'>Options</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>Jamie</Table.Cell>
                <Table.Cell>Approved</Table.Cell>
                <Table.Cell>Approved</Table.Cell>
                <Table.Cell>Approved</Table.Cell>
                <Table.Cell textAlign='right'>Options</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>Jill</Table.Cell>
                <Table.Cell>Denied</Table.Cell>
                <Table.Cell>Denied</Table.Cell>
                <Table.Cell>Denied</Table.Cell>
                <Table.Cell textAlign='right'>Options</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>Jill</Table.Cell>
                <Table.Cell>Denied</Table.Cell>
                <Table.Cell>Denied</Table.Cell>
                <Table.Cell>Denied</Table.Cell>
                <Table.Cell textAlign='right'>Options</Table.Cell>
            </Table.Row>
            </Table.Body>
        </Table>
    </div>
  )
}
