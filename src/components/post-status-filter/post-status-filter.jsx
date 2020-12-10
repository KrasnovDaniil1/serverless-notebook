import React, { Component } from 'react';
class PostStatusFilter extends Component {
    render() {
    return (
        <div className="btn-group">
            <button className="btn btn-info">Все</button>
            <button className="btn btn-outline-secondary">Понравилось</button>
        </div>
    )
    }
}
export default PostStatusFilter;