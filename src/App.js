import React, { Component } from "react";
import logo from "images/logo.svg";
import "css/style.css";

class App extends Component {
    render() {
        return (
            <div className="text-center">
                <header className="bg-neutral-800 min-h-screen flex items-center justify-center text-white flex-col">
                    <img src={logo} className="logo" alt="logo" />
                    <h1>
                        fdsafjsdalf <span className="badge ~danger">test</span>
                    </h1>
                    <div className="grid grid-cols-6 gap-2 my-4">
                        <span className="button ~neutral !normal mb-1">Button</span>
                        <span className="button ~success !normal mb-1">Button</span>
                        <span className="button ~warning !normal mb-1">Button</span>
                        <span className="button ~danger !normal mb-1">Button</span>
                        <span className="button ~info !normal mb-1">Button</span>
                        <span className="button ~urge !normal mb-1">Button</span>
                    </div>
                    <div className="container max-w-2xl">
                        <div className="md:grid grid-cols-2 gap-4">
                            <section className="card ~neutral !normal content">
                                <h4>~neutral !normal</h4>
                                <p>Lorem ipsum dolor sit amet. This is a box. Be careful &mdash; you never know what's inside!</p>
                            </section>

                            <section className="card ~success !normal content">
                                <h4>~positive !normal</h4>
                                <p>Lorem ipsum dolor sit amet. This is a box. Be careful &mdash; you never know what's inside!</p>
                            </section>

                            <section className="card ~warning !normal content">
                                <h4>~warning !normal</h4>
                                <p>Lorem ipsum dolor sit amet. This is a box. Be careful &mdash; you never know what's inside!</p>
                            </section>

                            <section className="card ~danger !normal content">
                                <h4>~critical !normal</h4>
                                <p>Lorem ipsum dolor sit amet. This is a box. Be careful &mdash; you never know what's inside!</p>
                            </section>

                            <section className="card ~info !normal content">
                                <h4>~info !normal</h4>
                                <p>Lorem ipsum dolor sit amet. This is a box. Be careful &mdash; you never know what's inside!</p>
                            </section>

                            <section className="card ~urge !normal content">
                                <h4>~urge !normal</h4>
                                <p>Lorem ipsum dolor sit amet. This is a box. Be careful &mdash; you never know what's inside!</p>
                            </section>
                        </div>
                    </div>

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
