import React from 'react'
import { Button, BaseDialog } from '@eccenca/gui-elements';

const DialogComponent = () => {

    const [closeActive,setCloseActive] = React.useState(false)

    const  setGetActive = () => {
      setCloseActive(true)
    }
  
   const close = () => {
  
    setCloseActive(false)
  
   }
  
  
    return (
        <div>
        <h1>BaseDialog Component </h1>
           
  <BaseDialog title="Dialog Title"
  active={closeActive}
  modal={true}
  titleCancelButton={close}
  size="mini"
  buttonRow={[
  <Button onClick={close}>Cancel</Button>,
  <Button>Yes</Button>,
  <Button>More</Button>
  ]}
  >
  <p>Dialog Content</p>
  
  
  </BaseDialog>
  
  
   
  <Button   raised={true} // true | false (default), use it in cases when flat buttons not exposed enough
  accent={true} // true | false (default), use configured accent color
  colored={true} // true | false (default), use configured primary color
  ripple={false} onClick={() => setGetActive(true)}>Click me</Button>
   
        </div>
    )
}

export default DialogComponent
