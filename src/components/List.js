import {Component} from 'react'

class List extends Component{
  constructor(props){
    super(props)
    this.state = {items: [], value: ""}
  }

  updateValue = (event) => {
    this.setState({value: event.target.value})
  }

  addValue = (event) => {
    this.setState({items: [...this.state.items, this.state.value] })    
  }

  removeValue = (index) => {
    const items = this.state.items.filter((item, i) => i != index)
    this.setState({items})
  }

  render(){
    return (<ul>
      <input 
        type="text" 
        value={this.state.value} 
        onChange={this.updateValue}
      ></input>
      <button onClick={this.addValue}>Add</button>
      {this.state.items.map((item,index) => (
        <li 
          key={index}
          onClick={() => this.removeValue(index)}
        >
            {item}
        </li>) 
      )}
    </ul>)
  }
}

export default List