import React from 'react';
import './App.scss';
import PublicComponent from './components/app-public'
import PrivateComponent from './components/app-private'
import { UserProvider } from './context/user-context'

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      isAuthenticated: false,
      user: null
    }
  }

  authenticateUser = (user) => {
    if (user.username === 'admin' && user.password === 'admin') {
      this.setState(prevState => {
        return { ...this.state, isAuthenticated: true, user: { username: user.username } }
      })
    }
  }

  render() {
    let componentToRender = this.state.isAuthenticated ? (
      <UserProvider value={this.state.user}>
        <PrivateComponent />
      </UserProvider>
    ) : <PublicComponent authCheck={this.authenticateUser} />

    return (
      <div className="app">
        {componentToRender}
      </div >
    );
  }
}

export default App;
