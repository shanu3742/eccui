
import React from 'react';
import './App.css';

import { Button,  Card,
  CardTitle,
  CardMenu,
  CardContent,
  CardActions,ContextMenu,MenuItem} from '@eccenca/gui-elements';


  
// <Card
// className={'my-own-class'} // string, element can be enhanced with additional CSS classes
// stretch={false|true} // boolean, should the card element use full width of available space, default: true
// shadow={0.8} // integer, z-coordinate of card, amount of shadow applied to the card, 0 (off), 1 (2dp) to 8 {24dp}, default: 1
// fixedActions={false|true} // boolean, if the card contains a fixed CardActions button row, default: false
// reducedSize={false|true} // boolean, renders the card with reduced paddings and marging, default: false
// >
// <CardTitle
//     className="my-own-class"
//     border={false|true} // boolean, horizontal border under title, default: true
    
// >
//     Card title
// </CardTitle>
// <CardMenu
//     className="my-own-class"
// >
    
//     <ContextMenu>
//         <MenuItem>Menu item 1</MenuItem>
//         <MenuItem>Menu item 2</MenuItem>
//     </ContextMenu>
// </CardMenu>
// <CardContent
//     className="my-own-class"
// >
    
// </CardContent>
// <CardActions
//     className="my-own-class"
//     border={false|true} // boolean, horizontal border top of button row, default: true
//     fixed={false|true} // boolean, if button row should be always visible sticky on botton when card is partly shown, default: false
// >
  
// </CardActions>
// </Card>


function App() {

 


 
  return (
    < >

  <div>
  <h1>Button Component</h1>
<Button >
Scroll card into viewport
</Button>


    </div>
    </>
  );
}

export default App;
