import  React from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import './App.css';
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry'


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: '',
        };
    }

    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users =>{
            this.setState({robots: users});
        })
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
    }

    render(){
        let {robots, searchField} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.username.toLowerCase().includes(searchField.toLowerCase());
            /* robot.name.toLowerCase().includes(searchField.toLowerCase()) || */
                
        });

        if(robots.length === 0)
        return (
            <h1 className="nice flex justify-center "> LOADING... </h1>
        )
        return (
        <div>
            <h1 className="tc nice mb2">RoboFriends</h1>
            <SearchBox onSearchChange={this.onSearchChange}/>
            <ErrorBoundry>
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </ErrorBoundry>
        </div>
    );
}
}

export default App;