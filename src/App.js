import React, { Component } from "react";
import logo from "@/assets/images/logo.svg";
import "@/assets/css/style.css";

class App extends Component {
    render() {
        return (
            <div className="text-center">
                <header className="bg-neutral-800 min-h-screen flex items-center justify-center text-white flex-col">
                    <img src={logo} className="logo" alt="logo" />
                    <div className="sep" />
                    <div>
                        <span className="button ~neutral mr-2">Button</span>
                        <span className="button ~primary mr-2">Button</span>
                        <span className="button ~success mr-2">Button</span>
                        <span className="button ~warning mr-2">Button</span>
                        <span className="button ~danger mr-2">Button</span>
                        <span className="button ~info mr-2">Button</span>
                        <span className="button ~urge mr-2">Button</span>
                    </div>
                    <div className="sep" />
                    <div>
                        <span className="button ~primary !high !small mr-2">Small Button</span>
                        <span className="button ~success !high mr-2">Normal Button</span>
                        <span className="button ~warning !high !large mr-2">Large Button</span>
                    </div>
                    <div className="sep" />
                    <div className="container max-w-2xl">
                        <div className="md:grid grid-cols-2 gap-4">
                            <section className="card ~neutral content">
                                <h4>~neutral</h4>
                                <p>Lorem ipsum dolor sit amet. This is a box. Be careful &mdash; you never know what's inside!</p>
                            </section>

                            <section className="card ~primary content">
                                <h4>~primary</h4>
                                <p>Lorem ipsum dolor sit amet. This is a box. Be careful &mdash; you never know what's inside!</p>
                            </section>

                            <section className="card ~success content">
                                <h4>~success</h4>
                                <p>Lorem ipsum dolor sit amet. This is a box. Be careful &mdash; you never know what's inside!</p>
                            </section>

                            <section className="card ~warning content">
                                <h4>~warning</h4>
                                <p>Lorem ipsum dolor sit amet. This is a box. Be careful &mdash; you never know what's inside!</p>
                            </section>

                            <section className="card ~danger content">
                                <h4>~danger</h4>
                                <p>Lorem ipsum dolor sit amet. This is a box. Be careful &mdash; you never know what's inside!</p>
                            </section>

                            <section className="card ~info content">
                                <h4>~info</h4>
                                <p>Lorem ipsum dolor sit amet. This is a box. Be careful &mdash; you never know what's inside!</p>
                            </section>

                            <section className="card ~urge content">
                                <h4>~urge</h4>
                                <p>Lorem ipsum dolor sit amet. This is a box. Be careful &mdash; you never know what's inside!</p>
                            </section>
                        </div>
                    </div>
                    <div className="sep" />

                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a className="text-teal-500" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                        Learn React
                    </a>
                    <div className="sep" />
                </header>
            </div>
        );
    }
}

export default App;
