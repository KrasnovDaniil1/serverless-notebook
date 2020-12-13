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
            data: [
                {label : "React" , important : false ,like: false, id : "1"} ,
                {label : "Html" ,important : false ,like: false, id : "2"} ,
                {label : "CSS"  ,important : false ,like: false, id : "3"}
            ],
            term:'',
            filter:'all'
        };
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.maxId = 4;
        this.searchPost = this.searchPost.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.filterPost = this.filterPost.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
    }

    onFilterSelect(filter) {
        this.setState({filter: filter})
    }

    onUpdateSearch(term) {
        this.setState({term:term})
    }
    
    searchPost(items , term) {
        if (term.length === 0 ) {
            return items
        }
        return items.filter((item) => {
            return item.label.indexOf(term) > -1
        })
    }

    filterPost(items , filter) {
        if (filter === 'like') {
            return items.filter(item => item.like )
        }
        else {
            return items
        }
    
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

    onToggleImportant(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index]
            const newItem = {...old , important: !old.important}
            const before = data.slice(0, index);
            const after = data.slice(index + 1)
            const newArr = [...before ,newItem, ...after];
            return {
                data: newArr
            }
        })
    }

    onToggleLiked(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index]
            const newItem = {...old , like: !old.like}
            const before = data.slice(0, index);
            const after = data.slice(index + 1)
            const newArr = [...before ,newItem, ...after];
            return {
                data: newArr
            }
        })
    }

    render() {
        
        const {data , term , filter} = this.state;
        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;
        const visiblePosts = this.filterPost(this.searchPost(data , term) , filter);

    return (
        <div className="app container">
            <AppHeader
                liked = {liked}
                allPosts = {allPosts}
            />
            <div className="search-panel d-flex my-1">
                <SearchPanel
                    onUpdateSearch={this.onUpdateSearch}
                />
                <PostStatusFilter 
                filter={filter}
                onFilterSelect={this.onFilterSelect}
                />
            </div>
            <PostList 
                posts={visiblePosts} 
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