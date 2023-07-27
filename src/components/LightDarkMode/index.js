// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {clickButton: true}

  onButtonPressed = () => {
    this.setState(prevState => ({clickButton: !prevState.clickButton}))
  }

  render() {
    const {clickButton} = this.state
    const classNameMode = clickButton ? 'dark-mode' : 'light-mode'
    const buttonText = clickButton ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="first-container">
        <div className={`second-container ${classNameMode}`}>
          <h1>Click to Change mode</h1>
          <button
            type="button"
            className="button-text"
            onClick={this.onButtonPressed}
          >
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
