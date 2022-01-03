// your Bomb code here!
import React from 'react';

class Bomb extends React.Component {
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    updateSeconds = () => {
        this.setState({
            secondsLeft: this.state.secondsLeft - 1
        })
    }

    render() {
        const message = this.state.secondsLeft === 0 ? 'Boom!' : this.state.secondsLeft + ' seconds left before I go boom!'

        return (<div><button onClick={this.updateSeconds}>
            {message}
            </button>

        </div>)
    }


}

export default Bomb;