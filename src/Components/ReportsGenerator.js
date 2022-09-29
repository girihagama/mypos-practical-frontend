import React from 'react'
import { Form, Button, Segment } from 'semantic-ui-react'

export default function ReportsGenerator() {
  return (
    <div>
      <Segment inverted>
            <Form inverted>
            <Form.Group widths='equal'>
                <Form.Input type='date' fluid label='Generate From' placeholder='From Date' />
                <Form.Input type='date' fluid label='Generate To' placeholder='To Date' />    
                <Button type='submit' compact size='small'>Generate</Button>            
            </Form.Group>          
            </Form>
        </Segment>
    </div>
  )
}
