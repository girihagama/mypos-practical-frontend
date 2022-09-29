import React, {useContext, useEffect} from 'react'
import { Table, Button, Divider } from 'semantic-ui-react'

import {ProductContext} from '../Contexts/ProductContext';
import {AuthContext} from '../Contexts/AuthContext';

export default function ProductsTable() {
   const {productList, loadProducts, changeName, changePrice, changeQty, initLoad, setInitLoad} = useContext(ProductContext);
   const {token} = useContext(AuthContext);

   useEffect(() => {
        if(!initLoad) loadProducts(token);
    });

  return (
    <div>
      <Divider horizontal>Product List</Divider>
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
                { (productList).map((data) => {
                        return(
                            <Table.Row key={data.Products_id}>
                                <Table.Cell>{data.Products_id}</Table.Cell>
                                <Table.Cell>{data.Products_Name}</Table.Cell>
                                <Table.Cell>{data.Products_price}</Table.Cell>
                                <Table.Cell>{data.Products_qty}</Table.Cell>
                                <Table.Cell textAlign='right'>
                                    <Button.Group size='small'>
                                        <Button onClick={()=>changeName(token, data)}>Change Name</Button>
                                        <Button onClick={()=>changePrice(token, data)}>Update Price</Button>
                                        <Button onClick={()=>changeQty(token, data)}>Update Qty</Button>
                                    </Button.Group>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })
                }
            </Table.Body>
        </Table>
    </div>
  )
}
