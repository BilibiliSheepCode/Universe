import './App.css';
import Button from './module/Button';
import React from 'react'
import './login'

class App extends React.Component {
  render() {
    return (
      <div className='AppRoot'>
        <Button href='./login.html' onClick='login()'/>
      </div>
    )
  }
}

export default App;
