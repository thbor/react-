import React from 'react'
import { Table } from 'antd';
import { SELECTION_ALL } from 'antd/lib/table/hooks/useSelection';
class PTable extends React.Component{
 
  constructor(props){
    super(props)
    this.state={
      selectedRowKeys:[]
    }
    this.onSelectChange = this.onSelectChange.bind(this)
  }
  onSelectChange(selectedRowKeys){
    this.setState({selectedRowKeys})
  }
  render(){
    const dataSource = [];
    for (let i = 0; i < 46; i++) {
      dataSource.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
      });
    }
    const columns = [
      {
        title: '序號',
        dataIndex: 'key',
        key: 'key',
      },
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
      },
    ];
    const {selectedRowKeys} = this.state
    const rowSelection={
      selectedRowKeys,
      onChange:this.onSelectChange,
      selections:[
        Table.SELECTION_ALL,
        Table.SELECTION_INVERT,
      ]
    }
    
    return(
      <div>
         <Table rowSelection={rowSelection} dataSource={dataSource} columns={columns} />;
      
      </div>
    )
  }
}
export default PTable