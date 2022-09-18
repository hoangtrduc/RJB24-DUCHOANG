import React, { Component } from 'react'

export default class Even extends Component {
    constructor(props) {
        super(props);
        this.state = { numVenet: 1 }
    }

    change = () => {
        this.setState({ numVenet: this.state.numVenet + 1 })
    }

    chanage = () => {
        this.setState({ numVenet: this.state.numVenet - 1 })
    }

    render() {
        return (
            <div>
                <button onClick={this.change}>cong</button>
                <button onClick={this.chanage}>tru</button>
            </div>
        )
    }
}
