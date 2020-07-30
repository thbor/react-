import React from 'react'
import {  Menu,Dropdown } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
class Top extends React.Component{
  constructor(props){
    super(props)
    this.state={
      personPath:window.location.origin+"/static/person.jpg",
      collapse:false,
      title:'React學習',
      LeftWidth:'200px',
      rightWidth:'calc(100% - 200px)'
    }
    this.collapseChange = this.collapseChange.bind(this)
    this.showLayout = this.showLayout.bind(this)
  }
  collapseChange(){
    this.setState({collapse:!this.state.collapse})
    this.setState({title:this.state.collapse?'React學習':'R'})
    this.setState({LeftWidth:this.state.collapse?'200px':'60px'})
    this.setState({rightWidth:this.state.collapse?'calc(100% - 200px)':'calc(100% - 60px)'})
    this.props.getCollapse(this.state.collapse)
  } 
  showLayout(){

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
      width:this.state.rightWidth
    }
    const personStyle = {
      width:'40px',
      height:'40px',
      margin:'10px 20px 10px 10px',
      float:'right',
    }
    const iconStyle={
      cursor:'pointer',
      fontSize:'25px',
      color:'white',
      textAlign:'center',
      width:'60px',
      borderLeft:'1px solid white',
      borderRight:'1px solid white',
      float:'left',
      
    }
    const menu = (
      <Menu>
        <Menu.Item>
          <a rel="noopener noreferrer" href="http://www.alipay.com/">
            退出登錄
          </a>
        </Menu.Item>
      </Menu>
    );
    return(
      <div style={this.props.style}>
        <div style={leftStyle}>
          <span>{this.state.title}</span>
        </div>
        <div style={rightStyle}>
          <div style={iconStyle} onClick={this.collapseChange}>
          {React.createElement(this.state.collapse ? MenuUnfoldOutlined : MenuFoldOutlined)}
          </div>
          <div style={personStyle} onClick={this.showLayout}>
          <Dropdown overlay={menu} placement="bottomCenter" arrow>
            <img src={this.state.personPath} alt="頭像" style={{width:'40px',position:'absolute',cursor:'pointer',borderRadius:'50%',}} />
          </Dropdown>,
          
          </div>
          
        </div>
      </div>
    )
  }
}
export default Top