import React from 'react'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
class Top extends React.Component{
  constructor(props){
    super(props)
    this.state={
      collapse:false,
      title:'React學習',
      LeftWidth:'200px'
    }
    this.collapseChange = this.collapseChange.bind(this)
  }
  collapseChange(){
    this.setState({collapse:!this.state.collapse})
    this.setState({title:this.state.collapse?'React學習':'R'})
    this.setState({LeftWidth:this.state.collapse?'200px':'60px'})
    this.props.getCollapse(this.state.collapse)
  } 
 
  render(){
    const leftStyle={
      width:this.state.LeftWidth,
      height:'60px',
      lineHeght:'60px',
      color:'white',
      fontSize:'20px',
      textAlign:'center',
      position:'absolute'
    }
    const rightStyle={
      position:'absolute',
      left:this.state.LeftWidth,
    }
    return(
      <div style={this.props.style}>
        <div style={leftStyle}>
          <span>{this.state.title}</span>
        </div>
        <div style={rightStyle}>
          <div style={{cursor:'pointer',fontSize:'25px',color:'white',textAlign:'center',width:'60px',borderLeft:'1px solid white',borderRight:'1px solid white'}} onClick={this.collapseChange}>
          {React.createElement(this.state.collapse ? MenuUnfoldOutlined : MenuFoldOutlined)}
          </div>
        </div>
      </div>
    )
  }
}
export default Top