import React from 'react'
import {random} from "../plugins/utils"
import echarts from 'echarts'
class EchartsNormal extends React.Component{
  constructor(props){
    super(props)
    this.state={
      id:random(),
      option:{}
    }
  }
  onChartClick(params){
    console.log("點擊",params)
    this.props.onChartClick(params)
  }
  render(){
    const echartsStyle={
      width:'100%',
      height:'100%',
    }
    return(
        <div id={this.state.id} style={echartsStyle}></div>
    )
  }
  componentDidMount(){
    var myChart = echarts.init(document.getElementById(this.state.id))
    myChart.on("click", params => {
      this.onChartClick(params);
    });
    window.addEventListener('resize',() => { myChart.resize(); }); //可以監聽多個resize

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(this.props.option);
  }
}
export default EchartsNormal