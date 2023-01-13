import { useState } from "react";

export default function Meme() {
    return (
        <form action="" className="form">
            <input className="form--textElement" type="text" placeholder="First Sentence" />
            <input className="form--textElement" type="text" placeholder="Second Sentence" />
            <button className="form--submit">Generate random meme</button>
        </form>
    );
}