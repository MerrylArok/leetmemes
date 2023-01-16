import { useState } from "react";

export default function Meme() {

    return (

        <section className="main">
            <h2>A Breakthrough Approach to Mastering the Art of Creating Hilarious Memes</h2>
            <p>LeetMemes is the best platform to practice making memes, master internet speak and crack the code to internet points.</p>
            <form action="" className="form">
                <input className="form--textElement" type="text" placeholder="Top Sentence" />
                <input className="form--textElement" type="text" placeholder="Bottom Sentence" />
                <button className="form--submit">Generate random meme</button>
            </form>
        </section>

    );
}