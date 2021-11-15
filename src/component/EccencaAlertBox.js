import React from 'react'
import { Alert, Error, Info, Success, Warning } from '@eccenca/gui-elements';

const EccencaAlertBox = () => {

    const    onDismiss = () => { } 
    return (
        <div>

        <h1>Alert Box</h1>
        <Alert
        border={true} // true|false, default is false
        vertSpacing={true} // true|false, default is false
        handlerDismiss={onDismiss} // function, onClick handler, necessary if icon button should be rendered
        labelDismiss="label for handler" // string, default: "Hide"
        iconDismiss="expand_less" // string, default: "close"
      >
        <p>This is a</p>
        <p>untyped message.</p>
      </Alert>
      <Info border={true} vertSpacing={true} >
        info
      </Info>
      <Success border={true} vertSpacing={true} >
       success
      </Success>
      <Warning border={true} vertSpacing={true} >
        warning
      </Warning>
      <Error handlerDismiss={onDismiss} labelDismiss="remove error" vertSpacing={true} >
        error with tooltip
      </Error>
        </div>
    )
}

export default EccencaAlertBox
