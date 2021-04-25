import React, { Component } from 'react';



export default class PostListItem extends Component {

    render() {

        const { label, onDelete, onToggleImportant, onToggleLike, important, like } = this.props;

        let classNames = 'app-list-item d-flex justify-content-between';

        if (important) {
            classNames += ' important';
        }

        if (like) {
            classNames += ' like';
        }
        // RENDER
        return (
            <div className={classNames}>
                <span onClick={onToggleLike} className="app-list-item-label">
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button onClick={onToggleImportant} type="button" className="btn-star btn-sm">
                        <i className="fa fa-star"></i>
                        {/* <img src={require('./star.png').default} alt="al" /> */}
                    </button>
                    <button type="button" className="btn-trash btn-sm" onClick={onDelete}>
                        <i className="fa fa-trash-o"></i>

                    </button>
                    <i className="fa fa-heart" ></i>
                </div>
            </div>
        )
    }
}
