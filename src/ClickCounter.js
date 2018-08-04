import React, { Component } from 'react';
class ClickCounter extends Component {
    constructor(props) {
        super();
        this.onClickButton = this.onClickButton.bind(this);
        this.state = {count: 0};
    }

    onClickButton() {
        this.setState({count: this.state.count + 1})
    }

    render() {
        const counterStyle = {
            margin: '16px'
        }
        return (
            <div style={counterStyle}>
                {/*not this.onClickButton() */}
                {/*not onclick onclick is for html onClick is for react component*/}
                <button onClick={this.onClickButton}>Click Me</button>
                <div>
                    Click Count : {this.state.count}
                </div>
            </div>
        )
    }
}
export default ClickCounter;