import React from 'react';
import SearchBar from './SearchBar';
import Scroll from './Scroll';
import './componentStyles/Header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          isTop: true
        };
        this.onScroll = this.onScroll.bind(this);
      }
    
      componentDidMount() {
        document.addEventListener('scroll', () => {
          const isTop = window.scrollY < 1;
          if (isTop !== this.state.isTop) {
            this.onScroll(isTop);
          }
        });
      }
    
      onScroll(isTop) {
        this.setState({ isTop });
      }

	render() {

        if (this.state.isTop) {
            return (
                <div className="sticky-top">
                    <div className="jumbotron jumbotron-fluid no-color">
                        <div className="container">
                            <h1 className="display-4 text-center grow animated fadeIn">Star Wars</h1>
                            <p className="lead text-center grow animated fadeIn">Data for all the stars...</p>
                            <hr className="my-4 animated rubberBand headerHR" />
                            <SearchBar />
                        </div>
                    </div>
                </div>
            );
        } else {
            return <Scroll />
            
        }
		
	}
}

export default Header;
