import React, {useContext, useEffect, useState} from 'react'
import { Grid, Dropdown, Segment, Button, Table, Input, Label, Divider } from 'semantic-ui-react'
import _ from 'lodash';

import {InvoiceContext} from '../Contexts/InvoiceContext';
import {AuthContext} from '../Contexts/AuthContext';

export default function InvoicesCreate() {
    const {loadProducts, productList, updatedProducts, productInitLoad, invProducts, addToInvoice, removeFromInvoice, hedAmount, setHedAmount, setInvProducts, createInvoice} = useContext(InvoiceContext);
    const {token} = useContext(AuthContext);

    const [invId, setInvId] = useState('');
    const [cusName, setCusName] = useState('');
    const [createNew, setCreateNew] = useState(false);

    const [productSelection, setProductSelection] = useState('');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [qty, setQty] = useState(1);

    useEffect(() => {
        if (!productInitLoad) loadProducts(token);
    });

    var handledropdown = (selected) => {    
        var selected = parseInt(selected);
        if(!isNaN(selected)){
            //console.log(selected);
            setProductSelection(selected);
            var found = _.find(productList, {Products_id:selected});
            setSelectedProduct(found);
        }else{
            //console.log('Clear input');
            setProductSelection('');
            setSelectedProduct(null)
        }
    }

    var handleQty = (value) => {
        var selected = parseInt(value);
        if(!isNaN(selected)){
            //console.log(selected);
            setQty(selected);
        }else{
            //console.log('Clear input');
            setQty(1);
        }
    }

    var handleAddInvoice = () => {
        selectedProduct['qty'] = qty;
        selectedProduct['amount'] = selectedProduct.Products_price*qty;
        console.log(selectedProduct);
        addToInvoice(selectedProduct);
        //Reset
        setProductSelection(null);
        setQty(1);
        //console.log("Grand Total", hedAmount);
    }

    var handleRemoveFromInvoice = (index) => {
        removeFromInvoice(index);
        console.log("Grand Total", hedAmount);
    }

    function submitNew(){
        var head = {};
        var detail = [];

        detail = invProducts;

        head.Invoice_Hed_id = invId;
        head.Invoice_Hed_Amount = hedAmount;
        head.Invoice_Hed_customer = cusName;

        createInvoice(head, detail, token);
        resetNewInvoice();        
    }

    function resetNewInvoice(){
        setInvId('');
        setCusName('');
        setCreateNew(false);

        setInvProducts([]);

        setProductSelection('');
        setSelectedProduct(null);
        setQty(1);
        setHedAmount(0);
    }

  return (
    <div>
      <Grid columns={16}>
        <Grid.Column width={16}>
            <Segment>
                <Grid>
                    <Grid.Column width={7}>
                        <Input disabled={(createNew)} min={1} type='number' value={invId} onChange={(e)=>{setInvId(e.target.value)}} required fluid label='Invoice #' placeholder='Add product id' />
                    </Grid.Column>
                    <Grid.Column width={7}>
                        <Input disabled={(createNew)} type='text' value={cusName} onChange={(e)=>{setCusName(e.target.value)}}  required fluid label='Customer Name' placeholder='Add product name' /> 
                    </Grid.Column>
                    <Grid.Column width={2} >
                        <Button disabled={(!invId || !cusName)} onClick={()=>setCreateNew(true)}>Create</Button>
                    </Grid.Column>
                </Grid>
            </Segment>
            {(createNew)?
            <Segment>
                <Grid>
                    <Grid.Column width={2}>
                        <Input fluid type='number' min={0} required onChange={(e)=> handleQty(e.target.value)} value={qty} label='Qty'/>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Dropdown placeholder='Select Product'
                        clearable
                        fluid
                        search            
                        selection
                        onChange={(e)=> handledropdown(e.target.textContent)}
                        options={updatedProducts}/>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        {(selectedProduct)
                        ? <div>
                            <Label size='mini' as='a' color='blue' tag>
                                NAME: {selectedProduct.Products_Name}
                            </Label>
                            <Label size='mini' as='a' color='red' tag>
                                PRICE: Rs.{selectedProduct.Products_price}
                            </Label>
                            <Label size='mini' as='a' color='yellow' tag>
                                AMOUNT: Rs.{selectedProduct.Products_price*qty}
                            </Label>                
                        </div>
                        : ""
                        }
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Button fluid color='blue' disabled={!(productSelection && qty)} onClick={()=>handleAddInvoice()}>Add</Button>
                    </Grid.Column>
                </Grid>

                <Divider/>
            
                <Table celled compact>
                    <Table.Header fullWidth>
                    <Table.Row>
                        <Table.HeaderCell>Product ID</Table.HeaderCell>
                        <Table.HeaderCell>Product Name</Table.HeaderCell>
                        <Table.HeaderCell>Unit Price</Table.HeaderCell>
                        <Table.HeaderCell>Qty</Table.HeaderCell>
                        <Table.HeaderCell>Amount</Table.HeaderCell>
                    </Table.Row>
                    </Table.Header>

                    <Table.Body>
                    {(invProducts).map((value,index)=>{                  
                        return(
                        <Table.Row key={index}>
                            <Table.Cell>{value.Products_id}</Table.Cell>
                            <Table.Cell>{value.Products_Name}</Table.Cell>
                            <Table.Cell>{value.Products_price}</Table.Cell>
                            <Table.Cell>{value.qty}</Table.Cell>
                            <Table.Cell>{value.amount}</Table.Cell>
                            <Table.Cell textAlign='right'><Button color='red' fluid onClick={()=>handleRemoveFromInvoice(index)}>Remove</Button></Table.Cell>
                        </Table.Row>
                        )
                    })

                    }
                    </Table.Body>

                    <Table.Footer fullWidth>
                    <Table.Row>
                        <Table.HeaderCell colSpan='10' textAlign='left'>
                            <h3>Total : {hedAmount}</h3>
                        </Table.HeaderCell>
                    </Table.Row>
                    </Table.Footer>
                </Table>

                <Button.Group fluid>
                    <Button onClick={()=>{resetNewInvoice()}}>Cancel</Button>
                    <Button.Or />
                    <Button color='green' onClick={()=>submitNew()} disabled={(invProducts && invProducts.legth > 0)}>Create</Button>
                </Button.Group>
            </Segment>
            : ""}

        </Grid.Column>
    </Grid>
    </div>
  )
}
