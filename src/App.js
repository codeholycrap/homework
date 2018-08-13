import React, { Component } from 'react';
import './App.css';
import Main from './main/main'


class App extends Component {

  state = {
    user: {}
  }

  getUser = () => {
    const name = this.refs.name.value;
    fetch(`http://api.github.com/users/${name}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          user: {
            name: data.name,
            location: data.location,
            avatar: data.avatar_url,
            followers: data.followers_url,
            bio: data.bio
          }
        })
      })
  }


  getFollowers = () => {
    this.state.followers.map(follower => {
      return <p>{follower}</p>
    })
  }
  

  render() {
    const { user } = this.state;


    


    return (
      <div className='App'>
        <div className='line'>
          <input className='box' type='text' placeholder='Enter a Username' ref='name' />
          <button className='button' onClick={this.getUser}>OK</button>
        </div>
        
        <Main user={user} follow={this.getFollowers} />
      </div>
    );
  }
}

export default App;
