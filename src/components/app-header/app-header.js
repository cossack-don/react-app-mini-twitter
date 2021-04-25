import React from 'react';

const AppHeader = ({ like, allPosts }) => {
    return (
        <div className="app-header d-flex">
            <h1>Sergey Zhuravlev</h1>
            <h2>{allPosts} записей, из них понравилось {like}</h2>
        </div>
    )
}

export default AppHeader;