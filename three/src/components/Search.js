import React from "react";
import "./Search.css";

class Search extends React.Component{
    state = {
        search: "",
        type: "all",
        page: 1 
    }

    handleKey = (event) => {
        if(event.key === 'Enter'){
            this.props.searchMovies(this.state.search, this.state.type,  this.state.page);
        }
    }

    handlerFilter = (event) => {
        this.setState({type: event.target.dataset.type},
        () => this.props.searchMovies(this.state.search, this.state.type, this.state.page));
    }

    nextPage = () => {
        let total = Math.ceil(this.props.totalCount / 10);
        this.setState(this.state.page === total ? {page: total} : {page: this.state.page + 1},
            () => this.props.searchMovies(this.state.search, this.state.type, this.state.page));     
    }
    
    prevPage = () => {
        this.setState(this.state.page > 1 ? {page: this.state.page - 1} : {page: 1},
            () => this.props.searchMovies(this.state.search, this.state.type, this.state.page));
    }

    setPage = (num) => {
        this.setState(
            {page: num},
            () => this.props.searchMovies(this.state.search, this.state.type, this.state.page)
        )
    }

    render(){
        let limit = 10;
        let totalPage = Math.ceil(this.props.totalCount / limit);

        let lastIndex = totalPage <= 10 ? totalPage : this.state.page + limit-1;  

        let firstIndex = totalPage <= 10 ?  lastIndex - limit + lastIndex - 2 : lastIndex - limit;  
        console.log(lastIndex);
        
        
        let num = [];
        for(let i=1; i<=totalPage; i++){
            num.push(i);
        }
        // console.log(num);
        
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
                    <input 
                        type="radio" 
                        name="type" 
                        id="all" 
                        data-type="all" 
                        checked={this.state.type === 'all'} 
                        onChange={this.handlerFilter} /> 
                        <label htmlFor="all">All</label>
                    <input 
                        type="radio" 
                        name="type" 
                        id="movies" 
                        data-type="movie" 
                        checked={this.state.type === 'movie'} 
                        onChange={this.handlerFilter} /> 
                        <label htmlFor="movies">Movies</label>
                    <input type="radio" name="type" id="series" data-type="series" checked={this.state.type === 'series'} onChange={this.handlerFilter} /><label htmlFor="series">Series</label> 
                    <input type="radio" name="type" id="games" data-type="game" checked={this.state.type === 'game'} onChange={this.handlerFilter} /> <label htmlFor="games">Games</label>
                </div>
                <div className="navigation">
                    <button style={{opacity: this.state.page == 1 ? ".5" : "1"}} className="btn" onClick={this.prevPage}>Prev</button>

                    <div className="items">
                        {
                            num.slice(firstIndex, lastIndex).map((el, index) => (
                                <button
                                    className="btn"
                                    key={index}
                                    style={{background: this.state.page != el? "" : "gray"}}
                                    onClick={() => this.setPage(el)}
                                >{el}</button>
                            ))
                        }
                    </div>

                    <button style={{opacity: this.state.page == totalPage ? ".5" : "1"}} className="btn" onClick={this.nextPage}>Next</button>
                </div>
            </>
        )
    }
}

export default Search; 
