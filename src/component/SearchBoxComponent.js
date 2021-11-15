import React from 'react'
import {AutoCompleteBox} from '@eccenca/gui-elements';

const SearchBoxComponent = () => {
    const [value, setvalue] = React.useState(null)

 const selectBoxOnChange = (e) => {

  setvalue(e[0].value)
 }
    return (
        <div>
        <h1>AutoCompleteBox Component</h1>
        <AutoCompleteBox
        placeholder="Label for AutoCompleteBox"
        options={[ 'Label', 'This is a description', '5000 Examples']}
        optionsOnTop={false} // option list opens up on top of select input (default: false)
        value={value}
        onChange={selectBoxOnChange}
        creatable={true} // allow creation of new values
        multi={true} // allow multi selection
        clearable={false} // hide 'remove all selected values' button
        handleValueChange={(value) => setvalue(value)} // pass user input directly to parrent
        showLabel={true} // define if label in options should be shown (default: true)
        showValue={true} // define if value in options should be shown (default: true)
        showDescription={true} // define if description in options should be shown (default: true)
       />
        </div>
    )
}

export default SearchBoxComponent
