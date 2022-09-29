import React,{useContext} from 'react'

import {ReportsContext} from '../Contexts/ReportsContext';
import {AuthContext} from '../Contexts/AuthContext';
import { Grid, GridColumn, Table } from 'semantic-ui-react';

export default function ReportsViewPrint() {
    const {fromDate, toDate, dataList, generatedOn, grandTotal} = useContext(ReportsContext);
    const {token} = useContext(AuthContext);

  return (
    <div>
      <Grid.Column width={16} stretched>
            <Grid>
                <GridColumn stretched width={8} textAlign='left'>
                Generated Date:<br/> {generatedOn}
                </GridColumn>
                <GridColumn width={4} textAlign='right'>
                Report From :<br/> {fromDate}
                </GridColumn>
                <GridColumn width={4} textAlign='right'>
                Report To :<br/> {toDate}
                </GridColumn>
            </Grid>
            <hr/>

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
                {(dataList).map((value,index)=>{                  
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

                <Table.Footer fullWidth>
                <Table.Row>
                    <Table.HeaderCell colSpan='4' textAlign='right'>
                        <h3>Total : {grandTotal}</h3>
                    </Table.HeaderCell>
                </Table.Row>
                </Table.Footer>
            </Table>
        </Grid.Column>
    </div>
  )
}
