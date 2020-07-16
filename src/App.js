import React, { Component } from "react";
import logo from "images/logo.svg";
import "scss/style.scss";
import "css/tailwind.output.css";

class App extends Component {
    render() {
        return (
            <div className="text-center">
                <header className="bg-neutral-800 min-h-screen flex items-center justify-center text-white flex-col">
                    <img src={logo} className="logo" alt="logo" />
                    <button className="button ~primary !high">dafsdfas</button>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a className="text-teal-500" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
