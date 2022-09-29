import React from 'react'
import { Table } from 'semantic-ui-react'

export default function InvoicesTable() {
  return (
    <div>
      <Table celled compact columns={'16'}>
            <Table.Header fullWidth>
            <Table.Row>
                <Table.HeaderCell>Invoice #</Table.HeaderCell>
                <Table.HeaderCell>Invoice Date</Table.HeaderCell>
                <Table.HeaderCell>Invoice Value</Table.HeaderCell>
                <Table.HeaderCell>Customer Name</Table.HeaderCell>
            </Table.Row>
            </Table.Header>

            <Table.Body>
            <Table.Row>
                <Table.Cell>John</Table.Cell>
                <Table.Cell>Approved</Table.Cell>
                <Table.Cell>Approved</Table.Cell>
                <Table.Cell>Approved</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>Jamie</Table.Cell>
                <Table.Cell>Approved</Table.Cell>
                <Table.Cell>Approved</Table.Cell>
                <Table.Cell>Approved</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>Jill</Table.Cell>
                <Table.Cell>Denied</Table.Cell>
                <Table.Cell>Denied</Table.Cell>
                <Table.Cell>Denied</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>Jill</Table.Cell>
                <Table.Cell>Denied</Table.Cell>
                <Table.Cell>Denied</Table.Cell>
                <Table.Cell>Denied</Table.Cell>
            </Table.Row>
            </Table.Body>
        </Table>
    </div>
  )
}
