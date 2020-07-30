import About from "../About"
import User from "../User"
import Child1 from "../Child1"
import Echarts1 from "../Component/Echarts1"
import PTable from "../Component/PTable"
import EchartsNormal from "../Template/EchartsNormal"
const route=[
  {
    path:"/",
    component:Echarts1
  },
  {
    path:"/echarts1",
    component:Echarts1
  },
  {
    path:"/table",
    component:PTable
  },
  {
    path:"/echartsNormal",
    component:EchartsNormal
  },
  {
    path:"/user",
    component:User
  },
  {
    path:"/about",
    component:About
  },
  {
    path:"/child1",
    component:Child1
  },
 
  
  
]
export default route