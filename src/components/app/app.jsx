import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostAddForm from '../post-add-form';
import PostList from '../post-list';
import PostStatusFilter from '../post-status-filter';
import './app.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data : [
                {label : "Going to learn React" , important : true , id : "1"} ,
                {label : "Going to learn Html" , id : "2"} ,
                {label : "Going to learn CSS"  , id : "3"}
            ]
        };
      /*  this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);*/
       this.deleteItem = this.deleteItem.bind(this);
       this.addItem = this.addItem.bind(this);
       this.maxId = 4;
    }

deleteItem(id) {
    this.setState(({data}) => {
        const index = data.findIndex(elem => elem.id === id);
        const before = data.slice(0, index);
        const after = data.slice(index + 1)
        const newArr = [...before , ...after];
        return {
            data: newArr
        }
            
        
    })
}

addItem(body) {
    const newItem = {
        label: body,
        important: false,
        id: this.maxId++
    }
    this.setState(({data}) => {
        const newAdd = [...data, newItem];
        return {
            data: newAdd
        }
    })
}
/*onToggleImportant(id) {
    console.log(`important $(id)`)
}
onToggleLiked(id) {
    console.log(`like $(id)`)
}*/

render() {


return (
    <div className="app container">
        <AppHeader/>
        <div className="search-panel d-flex my-1">
            <SearchPanel/>
            <PostStatusFilter/>
        </div>
        <PostList 
            posts={this.state.data} 
            onDelete={this.deleteItem}
            onToggleImportant={this.onToggleImportant}
            onToggleLiked={this.onToggleLiked} />
        <PostAddForm
            onAdd={this.addItem}
        />
    </div>
    
)
    }

}
export default App;