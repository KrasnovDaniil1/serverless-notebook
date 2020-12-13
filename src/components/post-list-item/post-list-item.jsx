import React, { Component } from 'react';
import './post-list-item.css'


class PostListItem extends Component {
  
    render() {
        
        const {label , onDelete , onToggleImportant , onToggleLiked , important , like} = this.props;

        let classStars = "fa fa-star";
        if (important) {
            classStars += ' important'
        }

        let classLike = "fa fa-heart";
        if (like) {
            classLike += ' like'
        }

        return (
            <div className="post-list-item d-flex justify-content-between">
                <span className="app-list-item-label my-auto ml-3">
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                <button type="button" className="btn-sm btn-info btn-outline-secondary" onClick={onToggleImportant}>
                    <i className={classStars}></i>
                </button>
                <button type="button" className="btn-sm btn-danger btn-outline-secondary mx-2" onClick={onDelete}>
                    <i className="trash fa fa-trash-o"></i>
                </button>
                <button className="btn-sm btn-info btn-outline-secondary mr-2" onClick={onToggleLiked}>
                    <i className={classLike}></i>
                </button>
                </div>  
            </div>

        )
    }
}

export default PostListItem;