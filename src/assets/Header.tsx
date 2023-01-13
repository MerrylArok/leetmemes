import { useState } from "react";
import logo from "./futurama.png"

export default function Header() {

    return (
        <nav className="header">
            <img className="header--logo" src={logo} alt="headerLogo" />
            <h1><a href="#">Memenator</a></h1>
            <h2><a href="https://imgflip.com/api" target="_blank">API Documentation</a></h2>

        </nav>)

}