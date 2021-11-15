import React from 'react'
import {Progressbar,Button} from '@eccenca/gui-elements';
const progressBarComponent = () => {
    return (
        <div>
        <div style={{marginBottom:'1rem'}}>
        <Progressbar progress={85} />
        </div>
       
        <div style={{marginBottom:'1rem'}}>
        <Progressbar appearGlobal={false} indeterminate={true} progress={95} />
        
        
        </div>
        
        
        <div style={{marginBottom:'1rem'}}>
        <Progressbar appearLocal={false} progress={15} />
        </div>
        </div>
    )
}

export default progressBarComponent
