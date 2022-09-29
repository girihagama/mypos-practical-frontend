import React, { useContext} from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'

import {ProductContext} from '../Contexts/ProductContext';
import {AuthContext} from '../Contexts/AuthContext';

export default function ProductsCreate() {
    const {id, setId, name, setName, price, setPrice, qty, setQty, addProduct} = useContext(ProductContext);
    const {token} = useContext(AuthContext);

  return (
    <div>
      <Segment inverted>
            <Form inverted>
            <Form.Group widths='equal'>
                <Form.Input type='number' value={(!id)?'':id} required onChange={(e)=>setId(e.target.value)} fluid label='Product ID' placeholder='Add product id' />
                <Form.Input type='text' value={(!name)?'':name} required onChange={(e)=>setName(e.target.value)} fluid label='Product Name' placeholder='Add product name' />
                <Form.Input type='float' value={(!price)?'':price} required onChange={(e)=>setPrice(e.target.value)} fluid label='Product Price' placeholder='Add product price' />
                <Form.Input type='number' value={(!qty)?'':qty} required onChange={(e)=>setQty(e.target.value)} fluid label='Product Qty' placeholder='Add product qty' />
                <Button type='submit' onClick={(e)=>{addProduct(token);}} compact size='small'>Add</Button>            
            </Form.Group>          
            </Form>
        </Segment>
    </div>
  )
}
