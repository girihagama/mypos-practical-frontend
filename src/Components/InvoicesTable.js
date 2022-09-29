import React, {useContext, useEffect} from 'react'
import { Table, Divider } from 'semantic-ui-react'

import {InvoiceContext} from '../Contexts/InvoiceContext';
import {AuthContext} from '../Contexts/AuthContext';

export default function InvoicesTable() {
    const {loadInvoices, invList, invListInitLoad} = useContext(InvoiceContext);
    const {token} = useContext(AuthContext);

    useEffect(() => {
        if (!invListInitLoad) loadInvoices(token);
    });

  return (
    <div>
      <Divider horizontal>Created Invoices</Divider>
      <Table celled compact>
                <Table.Header fullWidth>
                <Table.Row>
                    <Table.HeaderCell>Invoice #</Table.HeaderCell>
                    <Table.HeaderCell>Invoice Date</Table.HeaderCell>
                    <Table.HeaderCell>Customer Name</Table.HeaderCell>
                    <Table.HeaderCell>Invoice Value</Table.HeaderCell>
                </Table.Row>
                </Table.Header>

                <Table.Body>
                {(invList).map((value,index)=>{                  
                    return(
                    <Table.Row key={index}>
                        <Table.Cell>{value.Invoice_Hed_id}</Table.Cell>
                        <Table.Cell>{value.Invoice_Hed_Date}</Table.Cell>
                        <Table.Cell>{value.Invoice_Hed_customer}</Table.Cell>
                        <Table.Cell textAlign='right'>{value.Invoice_Hed_Amount}</Table.Cell>
                    </Table.Row>
                    )
                })

                }
                </Table.Body>
            </Table>
    </div>
  )
}
