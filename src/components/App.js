import React from 'react';

import Header from './Header';
import SearchList from './SearchList';
import Footer from './Footer';

import './componentStyles/App.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <SearchList />
                <Footer />
            </div>
        )
    }
}

export default App;