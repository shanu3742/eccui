import React from 'react'
import { NotAvailable } from '@eccenca/gui-elements';

export const NotAvailableComponent = () => {
    return (
        <div>
        <p>Not Available Component </p>
        <NotAvailable
        label="N/A" // short label that is shown, default: 'n/a'
        description="Not available element" // long description that is only shown on hover
        inline={false|true} // show it as inline text element, default: false
    />
        </div>
    )
}
