import React from 'react'
import Echarts from '../Template/EchartsNormal'
import {option1} from "../plugins/manager"
class Echarts1 extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
    this.onChartClick = this.onChartClick.bind(this)
  }
  onChartClick(params){
    console.log("組件中點擊",params)
  }
  render(){
    const optionStyle={
      width:'35vw',
      height:'50vh',
      border:'1px solid gray'
    }
    return(
      <div style={optionStyle}>
        <Echarts option={option1()} onChartClick={this.onChartClick}/>
      </div>
    )
  }
}
export default Echarts1