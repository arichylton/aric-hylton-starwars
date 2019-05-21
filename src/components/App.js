import React from 'react';

import Header from './Header';
import SearchBar from './SearchBar';
import SearchList from './SearchList';

import './componentStyles/App.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <SearchBar />
                <SearchList />
            </div>
        )
    }
}

export default App;