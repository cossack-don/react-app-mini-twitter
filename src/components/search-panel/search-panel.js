import React, { Component } from 'react';

export default class SearchPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        }
        // BINDS
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
    }

    onUpdateSearch(e) {
        const term = e.target.value;

        this.setState({ term });
        // не рекурсия
        this.props.onUpdateSearch(term)
    }
    // RENDER
    render() {
        return (
            <input
                className="form-control search-input"
                type="text"
                placeholder="Поиск по записям"
                onChange={this.onUpdateSearch}
            />
        )
    }
}

