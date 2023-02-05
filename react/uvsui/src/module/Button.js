import React from 'react'
import './css/Button.css'

// function LoginButton_Animotion(){
//   const docStyle = document.documentElement.style
//   const aElem = document.querySelector('a')
//   const boundingClientRect = aElem.getBoundingClientRect()

//   aElem.onmousemove = function(e) {
//     const x = e.clientX - boundingClientRect.left
//     const y = e.clientY - boundingClientRect.top

//     const xc = boundingClientRect.width/2
//     const yc = boundingClientRect.height/2
  
//     const dx = x - xc
//     const dy = y - yc
  
//     docStyle.setProperty('--rx', `${ dy/-1 }deg`)
//     docStyle.setProperty('--ry', `${ dx/10 }deg`)
//   }

//   aElem.onmouseleave = function(e) {
  
//     docStyle.setProperty('--ty', '0')
//     docStyle.setProperty('--rx', '0')
//     docStyle.setProperty('--ry', '0')
  
//   }

//   aElem.onmousedown = function(e) {
  
//     docStyle.setProperty('--tz', '-25px')
  
//   }
//   document.body.onmouseup = function(e) {
  
//   docStyle.setProperty('--tz', '-12px')
  
//   }
// }

class Button extends React.Component {
  constructor(props) {
      super(props)
      this.state = { message: "登录"}
  }

  render() {
    return (
      <div>
        <a className='LoginButtton' href={this.props.href} data-title={this.state.message}/>
      </div>
    )
  }

}

export default Button