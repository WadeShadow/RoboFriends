import  React from 'react';
import {connect} from 'react-redux';

import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import './App.css';
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry'
import {searchFieldSet} from '../actions'

// Denotes the map to the properties that will be used by the App component
const mapStateToProps = (state) => {
    return {
        searchField: state.searchField
    }
}

// Dispatch is a trigger for the defined action. It is needed to send an action.
// Action is 'dispatched' to reducer
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(searchFieldSet(event.target.value))
    }
}


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: []
        };
    }

    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users =>{
            this.setState({robots: users});
        })
    }

    render(){
        let {robots} = this.state;
        const {searchField, onSearchChange} = this.props;

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
            <SearchBox onSearchChange={onSearchChange}/>
            <ErrorBoundry>
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </ErrorBoundry>
        </div>
    );
}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);