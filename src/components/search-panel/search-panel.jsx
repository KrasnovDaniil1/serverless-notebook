import React, { Component } from 'react';

class SearchPanel extends Component {
    render(){
    return (
        <input
            className="form-control"
            type="text"
            placeholder="Поиск по записям"
        />
    )
    }
  
}
export default SearchPanel;