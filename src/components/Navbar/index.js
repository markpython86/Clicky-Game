import React from "react";
import "./Navbar.css";
import GameMessage from "../Message";

const Navbar = props => (
    // console.log()
    <div >
        <nav className="navbar">
            <div className="col-sm text-center">
                <h1>Clicky Game</h1>
            </div>
            <div className="col-sm text-center">
                <div className="float-center "><GameMessage score={props.score} topScore={props.topScore} /></div>
            </div>
            <div className="col-sm text-center">
                <div className="float-right ">Score: {props.score} | Top Score: {props.topScore}</div>
            </div>
        </nav>
    </div>
)

export default Navbar;
