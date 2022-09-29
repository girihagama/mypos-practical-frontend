import React, {useContext} from 'react';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';

import {AuthContext} from '../Contexts/AuthContext';

export default function LoginForm() {
  const {username, setUsername,password, setPassword, logged, token, login} = useContext(AuthContext);

  function handleSubmit() {
    login();   
  }

  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        MyPOS | Sign In
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid required icon='user' iconPosition='left' placeholder='E-mail address' value={username} onChange = {(e)=>setUsername(e.target.value)}/>
          <Form.Input
            fluid
            required
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            value= {password}
            onChange = {(e)=>setPassword(e.target.value)}
          />

          <Button type='submit' color='teal' fluid size='large' onClick={()=>handleSubmit()}>
            Login
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
  )
}