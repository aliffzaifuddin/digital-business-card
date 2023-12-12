import React from "react";
import Info from "./Info";
import About from "./About";
import Interest from "./Interest";
import Footer from "./Footer";

export default function App() {
    return (
        <main className="container">
            <Info />
            <div className="main-content">
                <About />
                <Interest />
            </div>
            <Footer />
        </main>
    )
}

