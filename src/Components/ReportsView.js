import React, {useRef} from 'react'
import ReactToPrint from "react-to-print";
import { Button, Divider, Grid, GridColumn, Table } from 'semantic-ui-react';

import ReportsViewPrint from './ReportsViewPrint';

export default function ReportsView() {
  const componentRef = React.useRef(null);

  return (
    <div>
      <Divider horizontal>Generated Report</Divider>
      <Grid>
         <Grid.Column width={16}>
            <ReportsViewPrint ref={componentRef}/>
         </Grid.Column>

        <Grid.Column width={16}>
            <ReactToPrint trigger={() => <Button fluid>Print</Button>} content={() => componentRef.current} />
        </Grid.Column>
      </Grid>      
    </div>
  )
}
