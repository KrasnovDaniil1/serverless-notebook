import React, { Component } from 'react';

class PostAddForm extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        const {onAdd} = this.props;
         return (                                       
        <div className="bottom-panel d-flex" /*Это form убрал чтобы не пеезагружалась страница*/>  
        <input
            type="text"
            placeholder="О чём вы думаете сейчас ?"
            className="form-control new post-label"
        />
        <button
            className="btn btn-outline-secondary"
            onClick={() => onAdd('Hello')}>
            Добавить 
        </button>
        </div>
    )
    }
   
}
export default PostAddForm;