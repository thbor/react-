import React from 'react';
import './App.css';
import Playout from "./Layout/Playout"
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import route from "./router/route"
class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      leftWidth:'200px'
    }
    this.getCollapseLayout = this.getCollapseLayout.bind(this)
  }
  getCollapseLayout(collapse){
    this.setState({leftWidth:collapse?'200px':'60px'})
  }
  render(){
      const contentStyle= {
        left:this.state.leftWidth,
        position:'absolute',
        padding:'20px',
        top:'60px'
      }
      return(
        <div>
          <Router>
          <Playout getCollapseLayout={this.getCollapseLayout} />
          <div style={contentStyle}>
           <Switch>
              {route.map((ele,i)=>{
                return <Route path={ele.path} exact component={ele.component} key={i} />
              })}
            </Switch>
          </div>
          </Router>
        </div>
      )
  }
}
// ReactDOM.render(<App />, document.getElementById('root'))
export default App;
