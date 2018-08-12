import React, { component } from 'react';


class Followers extends component {
  render () {
    const { followers } = this.props
    return (
        <div>
          <p>{followers.followers}</p>
        </div>
    );
  }
}


export default Follwers;