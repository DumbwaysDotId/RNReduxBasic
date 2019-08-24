import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import { connect } from 'react-redux';

import { getUsers, getUsersPending } from '../_actions/users'

class Users extends Component {

  constructor() {
    super();
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    this.props.dispatch(getUsersPending());
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      const users = res.data;
      this.props.dispatch(getUsers(users))
    })
  }

  render() {
    return (
      <View>
        {this.props.users.isLoading === false ? null : <Text>Loading...</Text>}
        {this.props.users.data.map(user => (
          <Text>{user.name}</Text>
        ))}
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(Users);