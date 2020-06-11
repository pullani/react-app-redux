import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';


// For instructor version: https://github.com/aneagoie/robofriends

import { setSearchField, requestRobots } from '../actions'

//Callback function to onRequestRobots()
const mapStateToProps = state => {
  console.log(state);
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}


class App extends Component {

  componentDidMount() {
    this.props.onRequestRobots();
  }


  //Inbuilt function - Changed: redux wll take care of it through props.
  //It is not : onSearchChange (event) { : It is a rule, for any fn you make, it should have the things 
  //created by the class. So it has to be passed clearly. If it is a react function, no eed for arrow function.
  //onSearchChange = (event) => {
    //this.setState({  searchfield: event.target.value }) //React feature. We dont have to do this.state.searchfield = 
    //console.log( event.target.value);
  //}


  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    console.log(robots);
    
    const filteredRobots = robots.filter(robot => {
      //console.log("helooo" , robot.name);
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    
    if (robots.length === 0){
      return <h1 className='f2 tc'>RoboFriends Loading...</h1>
    } 

    return isPending ? 
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            <h1 className='f1'>No matching results!</h1>
          </Scroll>
        </div>
      ) :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            <CardList robots={ filteredRobots }/>
          </Scroll>
        </div>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
// This will check for any changes in redux store.