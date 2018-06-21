import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            inputText: ''
        }
    }

    handlerInput = (event) => {
        this.setState({
            inputText: event.target.value
        })

        this.props.search(event.target.value)
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
