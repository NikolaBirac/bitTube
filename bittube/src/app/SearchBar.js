import React from 'react';
import { debounce } from 'lodash';


class SearchBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            inputText: ''
        }
        this.handlerSearch = debounce(this.handlerSearch, 1500)
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
            <div className='col-12'>
                <input type='text' value={this.state.inputText} onChange={this.handlerInput} placeholder='Search' />
            </div>
        )
    }

}

export default SearchBar;
