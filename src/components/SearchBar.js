import React from "react";

class SearchBar extends React.Component {
    state = { term: ''};

    render () {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={e => {
                    e.preventDefault();
                    //callback from parent component
                    this.props.onFormSubmit(this.state.term); 
                }} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input onChange={e=> this.setState({term: e.target.value})} value={this.state.term} type='text'></input>
                    </div>
                </form>
            </div>
        )
    };
};

export default SearchBar;