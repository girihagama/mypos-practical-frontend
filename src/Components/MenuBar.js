import React, { Fragment, useContext } from 'react'
import { Menu } from 'semantic-ui-react'

import {AuthContext} from '../Contexts/AuthContext'

export default function MenuBar() {
  const {logout, location, setLocation} = useContext(AuthContext);

  return (
    <Fragment>
        <Menu secondary>
        <Menu.Item
          name='Products'
          active={(location=='products')?true:false}
          onClick={()=>setLocation('products')}
        />
        <Menu.Item
          name='Invoices'
          active={(location=='invoices')?true:false}
          onClick={()=>setLocation('invoices')}
        />
        <Menu.Item
          name='Reports'
          active={(location=='reports')?true:false}
          onClick={()=>setLocation('reports')}
        />
        <Menu.Menu position='right'>
          <Menu.Item 
            name='Logout'            
            onClick={()=>logout()}
          />
        </Menu.Menu>
      </Menu>
    </Fragment>
  )
}
