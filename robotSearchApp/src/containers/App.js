import React, { Component }from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/Searchbox';
import './App.css'
import Scroll from '../components/Scroll';


//State means the description of your app. It's an object that describes the application. 
//State is the robots and whatever is entered in the search box.
//Props are things that come out of state
//Parent feeds state into a child component and then the child becomes a property after being received

//To use state
//SMART Components because it has STATE - tend to have this class syntax
class App extends Component {
    constructor() { //add a constructor before declaring the state then make sure to add super()
        super() //calls the constructor from component
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    componentDidMount() {
        //using Fetch to grab API
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users =>  {this.setState({robots: users})});        
        }
    //anytime you make your own method on a component
    //make sure to use the arrows since render and constructor are prebuilt with react
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value }) 
        }
    render() {
        const { robots, searchfield } = this.state;
        const filterRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        //if it took longer than 5 seconds bc of all the users
        //loading bar
        return !robots.length ?  //robots.length is equal to zero if this is zero then say the opposite
            <h1>Loading</h1> :
            (
                <div className='tc'>
                    <h1>RobotFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                    <CardList robots={filterRobots}/>
                    </Scroll>
                </div>
            );
       }
}
export default App;
