import React from 'react'
import { Button,Icon} from '@eccenca/gui-elements';

const EccencaButton = () => {
    return (
        <div>
        <h1>Button Component</h1>
        <Button >
        Scroll card into viewport
        </Button>


        <Button
        raised={true} // true | false (default), use it in cases when flat buttons not exposed enough
        accent={true} // true | false (default), use configured accent color
        colored={true} // true | false (default), use configured primary color
        ripple={false} // true | false (default), activate ripple effect on button
    >
        A Button
    </Button>

    <Button raised={true} ripple={false}  fabSize="mini">
     <Icon name= 'clear'/>
    </Button>

    <Button
    iconName="confirm" // icon name, @see https://material.io/icons/
    tooltip="This is a Test!" // tooltip, some icons have fallback tooltips, set it to false if you need to prevent them
    fabSize="mini" // use fabSize only if it is a FAB. "mini" | "large" (default)
    // you can apply all other button properties on icon buttons, too (e.g. affirmative, accent, ripple, ...)
/>


<Icon name="help" tooltip="question Marks" />

        
        </div>
    )
}

export default EccencaButton
