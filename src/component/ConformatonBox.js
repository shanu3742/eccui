import React from 'react'
import { Button, ConfirmationDialog } from '@eccenca/gui-elements';

const ConformatonBox = () => {

    const [getActive,setGetActive] = React.useState(false)


    return (
        <div>
        <h1> ConfirmationDialog</h1>

        <ConfirmationDialog title="Dialog Title"
        active={getActive}
        modal={true}
        size="mini"
        cancelButton={<Button onClick ={() => setGetActive(false)}>Cancel</Button>}
        confirmButton={<Button  onClick ={() => setGetActive(false)}>Yes</Button>}
        >
        <p>Dialog Content</p>
        </ConfirmationDialog>

        <Button   raised={true} // true | false (default), use it in cases when flat buttons not exposed enough
        accent={true} // true | false (default), use configured accent color
        colored={true} // true | false (default), use configured primary color
        ripple={false} onClick={() => setGetActive(true)}>Click me</Button>
        </div>
    )
}

export default ConformatonBox
