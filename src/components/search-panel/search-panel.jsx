import React, { Component } from 'react';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ""
        }
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
    }

    onUpdateSearch(e) {
        const term = e.target.value;
        this.setState({term: term})
        this.props.onUpdateSearch(term);
    }

    render() {
        return (
            <input
                className="form-control"
                type="text"
                placeholder="Поиск по записям" 
                onChange={this.onUpdateSearch} />
        )
    }
  
}
export default SearchPanel;