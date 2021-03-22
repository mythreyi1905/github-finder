import React, { Component } from 'react';

export class UserItem extends Component {
  

  render() {
    const { login, avatar_url, html_url } = this.props.user;
    console.log(this.props.user.id);
    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          alt=""
          className="round-img"
          style={{ width: '60px' }}
        />
        <h3>{login}</h3>
        <div>
          <a href={html_url} classname="btn btn-dark btn-sm my-1">
            More   
          </a>
          
        </div>  
      </div>
    );
  }
}

export default UserItem;
