import React from 'react';

import Header from './Header';

import SearchList from './SearchList';

import './componentStyles/App.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <SearchList />
            </div>
        )
    }
}

export default App;