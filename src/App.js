import React from 'react';
import './App.css';
import Playout from "./Layout/Playout"
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import route from "./router/route"
class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      leftWidth:'200px',
      rightWidth:'calc(100% - 200px)'
    }
    this.getCollapseLayout = this.getCollapseLayout.bind(this)
  }
  getCollapseLayout(collapse){
    this.setState({leftWidth:collapse?'200px':'60px'})
    this.setState({rightWidth:collapse?'calc(100% - 200px)':'calc(100% - 60px)'})
  }
  render(){
      const contentStyle= {
        left:this.state.leftWidth,
        position:'relative',
        // padding:'20px',
        top:'60px',
        width:this.state.rightWidth,
      }
      return(
        <div>
          <Router>
          <Playout getCollapseLayout={this.getCollapseLayout} />
          <div style={contentStyle}>
            <div style={{height:'calc(100vh - 60px)',overflowX:'hidden',padding:"20px"}}>
            <Switch>
              {route.map((ele,i)=>{
                return <Route path={ele.path} exact component={ele.component} key={i} />
              })}
            </Switch>
            </div>
          </div>
          </Router>
        </div>
      )
  }
}
// ReactDOM.render(<App />, document.getElementById('root'))
export default App;
