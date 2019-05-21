import React from 'react';

import './componentStyles/Header.css';

class Header extends React.Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid no-color">
                <div className="container">
                    <h1 className="display-4 text-center grow">Star Wars</h1>
                    <p className="lead text-center grow">Data for all the stars...</p>
                    <hr className="my-4 " />
                </div>                  
            </div>
        )
    }
}

export default Header;