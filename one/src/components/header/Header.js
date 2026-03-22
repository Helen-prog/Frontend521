import logo from './logo.svg';
import './Header.css';

function Header({title, slog}) { 

    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>{title}</h1>
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <p>{slog}</p>
        </header>
    )
}

export default Header;