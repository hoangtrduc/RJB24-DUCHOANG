import React, { Component } from 'react'

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { myName: null }
    }

    change = () => {
        this.setState({ myName: 'Black' })
    }

    hello = () => {
        this.setState({ myName: 'Red' })
    }

    render() {
        return (
            <div>
                {this.state.myName}
                <button onClick={this.change}>Change Black</button>
                <button onClick={this.hello}>Change Red</button>
            </div>
        )
    }
}
