import React from 'react';
// import ReactDOM from 'react-dom'
class Child1 extends React.Component{
  render(){
    return(
      <div></div>
    )
  }
  // render(){
  //   console.log("parentData",this.props.parentData)
  //   const divStyle={
  //     border:'1px solid red',
  //   } 
  //   const info = this.props.parentData.map(item=>
  //       <div key={item.name} style={divStyle}>
  //         {Object.keys(item)}
  //         name:{item.name},
  //         age:{item.age}
  //       </div>
  //   )
  //   return (
  //     <div>{info}</div>
  //   )
  // }
}
export default Child1;