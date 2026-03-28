import React from "react";
import "./Search.css";

class Search extends React.Component{
    state = {
        search: "" 
    }

    handleKey = (event) => {
        if(event.key === 'Enter'){
            this.props.searchMovies(this.state.search);
        }
    }

    render(){
              
        return (
            <>
                <div className="search">
                    <input 
                        type="search"
                        placeholder="search"
                        value={this.state.search}
                        onChange={e => this.setState({search: e.target.value})}
                        onKeyDown={this.handleKey}
                        />
                </div>
                <div className="radio">
                    <input type="radio" name="type" id="all" /> <label htmlFor="all">All</label>
                    <input type="radio" name="type" id="movies" /> <label htmlFor="movies">Movies</label>
                    <input type="radio" name="type" id="series" /><label htmlFor="series">Series</label> 
                    <input type="radio" name="type" id="games" /> <label htmlFor="games">Games</label>
                </div>
            </>
        )
    }
}

export default Search;