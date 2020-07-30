
import React from "react"
import { Menu } from 'antd';
import menus from '../menus'
import { withRouter } from 'react-router-dom';
const { SubMenu } = Menu;



class AsideMenu extends React.Component{
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state={
      style:props.style,
      leftWidth:props.collapse?'200px':'60px'
    }
  }
  handleClick(e){
    this.props.history.push(e.key)
  }
  render(){
    const menuStyle=this.props.style
    const Menuinfo = menus.map(item=>
      <SubMenu key={item.id} title={<span>{this.props.collapse?item.name:item.hidename}</span>} >
        {item.children.map(item2=>
        <Menu.Item key={item2.path} >
          {this.props.collapse?item2.name:item2.hidename}
        </Menu.Item> 
        )}
      </SubMenu>
      )
    return(
      // <div>
      <div style={menuStyle}>
        <Menu
        onClick={this.handleClick}
        defaultSelectedKeys={[menus[0].children[0].path]}
        defaultOpenKeys={[menus[0].id]}
        mode="inline"
        theme="dark"
        inlineCollapsed={!this.props.collapse}
        style={{background:'#001528',color:'white',width:this.state.leftWidth}}
        >
          {Menuinfo}
        </Menu>
      </div>
    )
  }
}
export default withRouter(AsideMenu)