import React, { Component } from 'react';
import PostListItem from '../post-list-item';


class PostList extends Component {

    render() {

        const {posts , onDelete , onToggleImportant , onToggleLiked } = this.props;
        const elements = posts.map((item) => {
            return (
                <li key={item.id} className="list-group-item my-2">
                    <PostListItem 
                    label={item.label} 
                    important={item.important} 
                    like={item.like}
                    onDelete={() => onDelete(item.id)} 
                    onToggleImportant={() => onToggleImportant(item.id)} 
                    onToggleLiked={() => onToggleLiked(item.id)}
                    />
                </li>
                
            )
        });

        return (
            <ul className="post-list list-group my-3">
            {elements}
            </ul>
        )
    }
    }

export default PostList;