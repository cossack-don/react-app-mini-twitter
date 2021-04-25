import React, { Component } from 'react';

// components js

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

// css components
import './app.css';
import '../app-header/app-header.css';
import '../post-add-form/post-add-form.css';
import '../post-list/post-list.css';
import '../post-list-item/post-list-item.css';
import '../post-status-filter/post-status-filter.css';
import '../search-panel/search-panel.css';


// main component app
export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [

                {
                    label: 'goin to lern react',
                    important: true,
                    like: false,
                    id: 1
                },

                {
                    label: 'goin to lern react 22',
                    important: false,
                    like: false,
                    id: 2
                },

                {
                    label: 'goin to lern react 33',
                    important: false,
                    like: false,
                    id: 3
                },
            ],

            term: '',
            filter: 'all'
        };

        // BINDS
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLike = this.onToggleLike.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
        this.maxId = 4;
    }

    // METHODS
    deleteItem(id) {
        this.setState(({ data }) => {

            const index = data.findIndex(element => element.id === id)

            const newArray = [...data.slice(0, index), ...data.slice(index + 1)];

            return {
                data: newArray
            }

        });

    }


    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        }

        this.setState(({ data }) => {
            const newArray = [...data, newItem];
            return {
                data: newArray
            }
        })
    }

    onToggleImportant(id) {

        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = { ...old, important: !old.important };

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr
            }
        })
    }

    onToggleLike(id) {

        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = { ...old, like: !old.like };

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr
            }
        })

    }

    searchPost(items, term) {
        if (term.length === 0) {
            return items
        }

        return items.filter((item) => {
            return item.label.indexOf(term) > -1
        })
    }


    filterPost(items, filter) {

        if (filter === 'like') {
            return items.filter(item => item.like)
        } else {
            return items
        }
    }

    onUpdateSearch(term) {
        this.setState({ term });
    }

    onFilterSelect(filter) {
        this.setState({ filter })
    }

    // render
    render() {
        const { data, term, filter } = this.state;

        const like = data.filter(item => item.like).length;
        const allPosts = data.length;

        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

        return (
            <div className="app" >
                <AppHeader
                    like={like}
                    allPosts={allPosts}
                />

                <div className="search-panel d-flex">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <PostStatusFilter filter={filter}
                        onFilterSelect={this.onFilterSelect} />
                </div>
                <PostList
                    onToggleImportant={this.onToggleImportant}
                    onToggleLike={this.onToggleLike}
                    onDelete={this.deleteItem}
                    posts={visiblePosts} />
                <PostAddForm onAdd={this.addItem} />
            </div>
        )
    }


}
