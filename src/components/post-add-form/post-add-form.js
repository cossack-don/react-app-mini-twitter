import React, { Component } from 'react';

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        }

        // BINDS
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    // METHODS
    onValueChange(e) {
        this.setState({
            text: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        this.props.onAdd(this.state.text);

        this.setState({
            text: ''
        })
    }
    // RENDER
    render() {
        return (
            <form className="bottom-panel d-flex" onSubmit={this.onSubmit}>
                <input
                    type="text"
                    placeholder="О чем вы думаете сейчас?"
                    className="form-control new-post-label"
                    onChange={this.onValueChange}
                    value={this.state.text}
                />
                <button
                    className="btn btn-outline-secondary"
                    type="sybmit"
                >
                    Добавить
            </button>
            </form>
        )
    }
}