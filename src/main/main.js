import React, { Component } from 'react'
import './main.css'



// const main = (props) => {
//   return (
//     <div className='box'>
//       <img className='pic' src={require('./logo.png')} />
//       <div className='left'>
//         <h1>{props.name}</h1>
//         <p>hi</p>
//       </div>
//     </div>
//   )
// }




class Main extends Component {

  follow = () => {
    return (
      <li>
      </li>
    )
  }

  render() {
    const { user } = this.props
    return (
      <div className='secondbox'>
        <img className='pic' src={user.avatar} width='50px' />
        <div className='left'>
          <h5 className='name'>{user.name}</h5>
          <p className='bio'>{user.bio}</p>
          <p>{user.follow}</p>
        </div>
      </div>
    )
  }
}


export default Main