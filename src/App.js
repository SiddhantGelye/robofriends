import React from 'react'
import CardList from './CardList'
import SearchBar from './SearchBar'
// import {robots} from './Robot'
import Scroll from './Scroll'
class App extends React.Component{
    constructor(){
        super()
        this.state={
            robots :[],
            searchField :''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json()
        .then(users=> this.setState({robots:users}))
        )
        
    }
    onSearchChange=(event)=>{
        console.log(event.target.value);
        this.setState({searchField :event.target.value})
    }
    render(){
        const filteredRobots = this.state.robots.filter((robot)=>{
            return (robot.name.toLowerCase().includes(this.state.searchField.toLowerCase()))
        })
        
        return (
            <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBar onSearchChange = {this.onSearchChange}/>           
                <Scroll>
                    <CardList robots ={filteredRobots}/>
                </Scroll>
            </div>
        )
    }
    
}
export default App