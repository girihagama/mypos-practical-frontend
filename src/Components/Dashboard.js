import React, {useContext} from 'react';
import { Container, Grid, Divider } from 'semantic-ui-react';
import MenuBar from './MenuBar';
import Products from './Products';
import Invoices from './Invoices';
import Reports from './Reports';

import {AuthContext} from '../Contexts/AuthContext';

export default function Dashboard() {
  const {location} = useContext(AuthContext);

  return (
    <Container style={{ marginTop: '3em' }}>
      <Grid columns={16} stackable>
        <Grid.Column width={16} style={{ marginBottom: '3em' }}>
          <MenuBar/>        
        </Grid.Column>
      </Grid>
      {(location=='products')
        ?
        <Grid.Column columns={16} >
          <Products/>
        </Grid.Column>  
        :
        ""
      } 
      {(location=='invoices')
        ?
        <Grid.Column columns={16} >
          <Invoices/>
        </Grid.Column>  
        :
        ""
      } 
      {(location=='reports')
        ?
        <Grid.Column columns={16} >
          <Reports/>
        </Grid.Column>  
        :
        ""
      }    
    </Container>
  )
}