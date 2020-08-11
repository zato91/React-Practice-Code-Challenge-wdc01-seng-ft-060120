import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis : [],
    myPlate : [],
    money : 100,
    indexSushi: 0
    
    
  }
  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(sushis => {
      this.setState({
        // sushis 
        sushis: sushis.map(sushi => {return {...sushi, eaten: false}}) // add a new key and value pair
      })
    })
  }
  more4=()=>{

    if (this.state.indexSushi < this.state.sushis.length - 4){

      this.setState({
        indexSushi: this.state.indexSushi +4
      })
    } else {
      this.setState({
        indexSushi: 0
      })
    }
    
  }

  moveSushi=(sushi)=>{
    
    if(this.state.money >= sushi.price ){
    let myPlate = [...this.state.myPlate]
    myPlate.push(sushi)
    this.setState({myPlate})

    let sushis = [...this.state.sushis]
    sushis = sushis.filter(s=> s !== sushi)
    this.setState({ sushis })

    this.setState({ money: this.state.money - sushi.price })
    } 

  }

  render() {
    return (
      <div className="app">
        <SushiContainer 
        myPlate={this.state.myPlate}
        sushis={this.state.sushis}
        moveSushi={this.moveSushi}
        indexSushi={this.state.indexSushi}
        more4={this.more4}
        />
        <Table 
        myPlate ={this.state.myPlate}
        money ={this.state.money}
        />
      </div>
    );
  }
}

export default App;