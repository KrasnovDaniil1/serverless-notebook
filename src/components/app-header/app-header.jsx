import React, { Component } from 'react';

class AppHeader extends Component {

    render() {

        const {liked , allPosts} = this.props;

        return (
        <div className="d-flex justify-content-between align-items-center">
            <h3 text-secondary>Krasnov Daniil</h3>
            <div className="d-flex">
                <h6 className="mr-3">Количество записей {allPosts}</h6>
                <h6>В избранных {liked}</h6>
            </div>
            
        </div>
        )
    }
}
export default AppHeader;