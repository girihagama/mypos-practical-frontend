import React, {useContext} from 'react'
import { Form, Button, Segment, Divider } from 'semantic-ui-react'
import ReportsView from './ReportsView'

import {ReportsContext} from '../Contexts/ReportsContext';
import {AuthContext} from '../Contexts/AuthContext';

export default function ReportsGenerator() {
  const {fromDate, setFromDate, toDate, setToDate, dataList, generateReport, clearReport} = useContext(ReportsContext);
  const {token} = useContext(AuthContext);

  return (
    <div>
      <Segment inverted>
            <Form inverted>
            <Form.Group widths='equal'>
                <Form.Input type='date' value={fromDate} required fluid label='Generate From' onChange={(e)=>{setFromDate(e.target.value);}} placeholder='From Date' />
                <Form.Input type='date' value={toDate} required fluid label='Generate To' onChange={(e)=>{setToDate(e.target.value);}} placeholder='To Date' />    
                <Button type='submit' onClick={()=>generateReport(token)} compact size='small'>Generate</Button>            
                <Button type='submit' onClick={()=>clearReport()} compact size='small'>Clear</Button>            
            </Form.Group>          
            </Form>
        </Segment>
        {(dataList!==null)?<ReportsView/>:<Divider horizontal>Generate a report by selecting date range</Divider>}
    </div>
  )
}
