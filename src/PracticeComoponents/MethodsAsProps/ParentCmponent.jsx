import React, { Component } from 'react'
import ChildComponent from './ChildComponent'
import { useState } from 'react'
//  class ParentCmponent extends Component {

//     constructor(props) {
//       super(props)
    
//       this.state = {
//          parentName:'Parent'
//       }
//       this.greetParent=this.greetParent.bind(this)
//     }

//     greetParent(){
//         alert(`Helloo ${this.state.parentName}`)
//     }
    

//   render() {
//     return (
//       <div>
//         <ChildComponent greetHandler={this.greetParent} />
//       </div>
//     )
//   }
// }

// export default ParentCmponent

// import React, { useState } from 'react';
// import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [parentName, setParentName] = useState('Parent');

  const greetParent = () => {
    alert(`Helloo ${parentName}`);
  };

  return (
    <div>
      <ChildComponent greetHandler={greetParent} />
    </div>
  );
};

export default ParentComponent;
