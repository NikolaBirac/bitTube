import React from 'react';
import { debounce } from 'lodash';

class SearchBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            inputText: ''
        }
        this.handlerSearch = debounce(this.handlerSearch, 1500);
    }

    handlerInput = (event) => {
        this.setState({
            inputText: event.target.value
        })

        this.handlerSearch(event.target.value)
    }
    handlerSearch = (inp) => {
        this.props.search(inp)
    }


    render() {
        return (
            <div className='search'>
                <div className="container">
                    <div className="row search__container">
                        <div className="col-12 col-md-4">
                            <div className="row search__logo">
                                <img src={require('../img/play-logo.png')} className="search__logo-img" alt="logo"/>
                                <p className="search__logo-text ml-3">TUBE</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 offset-md-2 search__input pr-3">
                            <img src={require('../img/search-icon.svg')} className="search__icon" alt="search"/>
                            <input type='text' value={this.state.inputText} onChange={this.handlerInput} placeholder='Search...' className="search__input-field"/>
                        </div>
                        {(this.props.error) ? <p className='error col-5 offset-7 p-0 mb-0'>Video does not exist!</p> : ''}

                    </div>
                </div>
            </div>
        )
    }

}

export default SearchBar;
