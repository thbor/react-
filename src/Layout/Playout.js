
import React from "react"
import AsideMenu from './AsideMenu'
import Main from './Main'
import Top from "./Top"
class Playout extends React.Component{
  constructor(props){
    super(props)
    this.state={
      collapse:true,
      LeftWidth:'200px',
      rightWidth:'calc(100% - 200px)'
    }
    this.getCollapse = this.getCollapse.bind(this)
    
  }
  getCollapse(collapse){
    
    // this.setState({collapse:collapse})
    // this.setState({LeftWidth:collapse?'200px':'60px'})
    // this.setState({rightWidth:collapse?'calc(100% - 200px)':'calc(100% - 60px)'})
    //FIXME: state(状态)更新可能是异步的,React 为了优化性能，有可能会将多个 setState() 调用合并为一次更新。
    this.setState((state,props)=>
    ({
      collapse:collapse,
      LeftWidth:collapse?'200px':'60px',
      rightWidth:collapse?'calc(100% - 200px)':'calc(100% - 60px)'
    }))
    this.props.getCollapseLayout(collapse)
  }
  render(){
    const menuStyle={
      background:'#001528',
      height:'calc(100vh - 60px)',
      width:this.state.LeftWidth,
      position:'absolute',
      top:'60px',
      overFlow:'hidden'
    }
    const mainStyle={
      background:'#eff1f4',
      color:'#797979',
      height:'calc(100vh - 60px)',
      width:this.state.rightWidth,
      position:'absolute',
      left:this.state.LeftWidth,
      // padding:'20px',
      top:'60px'
    }
    const topStyle={
      height:'60px',
      lineHeight:'60px',
      backgroundColor:'white',
      position:'absolute',
      width:'100%',
      background: 'linear-gradient(90deg,#4a66f2,#54bbf2)',
    }
    return(
      <div>
        <AsideMenu style={menuStyle} collapse={this.state.collapse} />
        <Top style={topStyle} getCollapse={this.getCollapse} />
        <Main style={mainStyle}/>
       
      </div>
    )
  }
}
export default Playout